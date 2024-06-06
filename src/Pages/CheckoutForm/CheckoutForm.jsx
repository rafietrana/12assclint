import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./../../Hooks/useAuth";
import { toast } from "react-toastify";

const CheckoutForm = ({
  finalPaymentPrice,
  closeModal,
  paymentCollectionId,
  refetch,
  testInfo,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [procassing, setProcassing] = useState(false);
  console.log("alhamdulillah payment colllection id is", paymentCollectionId);
  const { testName } = testInfo;
  console.log("user is ", user);

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
    setProcassing(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcassing(false);
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
        setProcassing(false);
        return;
      } else {
        console.log("i found payment method is ", paymentMethod);
        setProcassing(true);
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
        console.error("Confirm Payment Error no probleme", confirmError);
        setProcassing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setProcassing(true);
        console.log("PaymentIntent Alhamdulillah", paymentIntent);
        console.log("Payment succeeded ");

        axios
          .put(`http://localhost:5000/decrementslots/${paymentCollectionId}`)
          .then((res) => {
            console.log(
              "alhamdulillah response data is from decrement  component",
              res
            );
            if (res.status == 200) {
              const reserveInfo = {
                userName: user?.displayName,
                userEmail: user?.email,
                transictionId: paymentIntent?.id,
                testname: testName || "Not Found",
                userPhoto: user?.photoURL,
              };
              axios
                .post("http://localhost:5000/reservepost", reserveInfo)
                .then((res) => {
                  console.log(res.data);
                  if (res.data.insertedId > 0) {
                    console.log("alahmdulillah this is working ");
                  }
                });
              console.log("alhamdulillah reserveinfo is", reserveInfo);
              setProcassing(false);
              refetch();
            }
          });
        toast.success("Payment Sucessfully");
        closeModal();
      }
    } catch (err) {
      setError(err.message);
      console.error(" I found Handle Submit Error", err);
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
      <button
        type="submit"
        disabled={!stripe}
        className="p-5 bg-green-50 rounded-lg flex justify-center items-center gap-1 "
      >
        <span>
          {procassing && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </span>

        <span> Pay Now </span>
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
