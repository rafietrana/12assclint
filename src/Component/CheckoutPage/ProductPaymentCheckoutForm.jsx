import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { globalStyles } from "./GlobalStyles";
import { toast } from "react-toastify";
import { forwardRef, useImperativeHandle, useState } from "react";

const ProductPaymentCheckoutForm = forwardRef((props, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");

  const handleProductPayment = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: name,
      },
    });

    if (error) {
      toast.error(error.message); // error.message ব্যবহার করো
      console.log("Got error after createPaymentMethod");
    } else {
      toast.success("Alhamdulillah! Successfully created payment method");
      console.log("Payment method is:", paymentMethod);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      runPayment: handleProductPayment,
    }),
    [stripe, elements, name]
  );

  return (
    <div className="px-5 pb-5 space-y-[16px]">
      <div>
        <label htmlFor="cardName" className={globalStyles.labelStyles}>
          Name on Card
        </label>
        <input
          required
          placeholder="Name on card"
          name="cardNames"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="cardName"
          className={globalStyles.inputStyles}
        />
      </div>

      <div>
        <label className={globalStyles.labelStyles}>Card Details</label>
        <div className="p-3 rounded-md">
          <CardElement options={{ hidePostalCode: true }} />
        </div>
      </div>
    </div>
  );
});

ProductPaymentCheckoutForm.displayName = ProductPaymentCheckoutForm;
export default ProductPaymentCheckoutForm;
