import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./../../Hooks/useAuth";

const CheckoutForm = ({ finalPaymentPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);

  // Get clientSecret
  const getClientSecret = async (price) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/create-payment-intent`,
        price
      );
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.error("Error getting client secret:", err);
    }
  };

  useEffect(() => {
    if (finalPaymentPrice && finalPaymentPrice > 0) {
      getClientSecret({ price: finalPaymentPrice });
    }
  }, [finalPaymentPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    try {
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (paymentMethodError) {
        setError(paymentMethodError.message);
        console.error("[Payment Method Error]", paymentMethodError);
        return;
      } else {
        console.log("i found payment method is ", paymentMethod);
      }

      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message);
        console.error("[Confirm Payment Error]", confirmError);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        console.log("[PaymentIntent]", paymentIntent);
        console.log("Payment succeeded");
      }
    } catch (err) {
      setError(err.message);
      console.error("[Handle Submit Error]", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe} className="p-5 bg-green-50 rounded-full ">
        Pay
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
