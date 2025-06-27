import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { globalStyles } from "./GlobalStyles";
import { toast } from "react-toastify";
import { forwardRef, useImperativeHandle } from "react";
import useAuth from "../../Hooks/useAuth";

const ProductPaymentCheckoutForm = forwardRef((props, ref) => {
  const { onProcassingChange, onSucessCheck } = props;
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();

  const handleProductPayment = async () => {
    if (!stripe || !elements) return;

    onProcassingChange?.(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: user?.displayName,
        email: user?.email,
      },
    });

    if (error) {
      toast.error(error.message);
      console.log("Got error after createPaymentMethod");
      onProcassingChange?.(false);
    } else {
      toast.success("Alhamdulillah! Successfully created payment method");
      console.log("Payment method is:", paymentMethod);
      onSucessCheck?.(true)
      cardElement.clear()
      onProcassingChange?.(false);
    }
    onProcassingChange?.(false);
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
