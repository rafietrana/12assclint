import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { globalStyles } from "./GlobalStyles";
import { toast } from "react-toastify";
import { useState } from "react";

const ProductPaymentCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName]  = useState("")
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
      toast.error(error);
      console.log("goted error after  createdPaymentMethod ");
    } else {
      toast.success("alhamdulillah sucessfully payment method create");
      console.log("alhamdulillah payment method is ", paymentMethod);
    }
  };
  return (
    <div className=" px-5 pb-5 space-y-[16px]">
      <div>
        <label htmlFor="cardName" className={`${globalStyles.labelStyles}`}>
          Name on Card
        </label>

        <input
          required
          placeholder="Name on card"
          name="cardNames"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          id="cardName"
          className={`${globalStyles.inputStyles}`}
        />
      </div>

      <div>
        <label className={globalStyles.labelStyles}>Card Details</label>
        <div className="p-3 rounded-md">
          <CardElement options={{ hidePostalCode: true }} />
        </div>
      </div>
      <button
        onClick={handleProductPayment}
        className="w-full bg-[#0FABCA] text-white py-3 px-4 rounded-lg hover:bg-[#0FABCA]/90 transition-colors"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default ProductPaymentCheckoutForm;
