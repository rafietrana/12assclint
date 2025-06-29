import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { globalStyles } from "./GlobalStyles";
import { toast } from "react-toastify";
import { forwardRef, useImperativeHandle } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { getFromLocalStorage } from "../Utilitis/LocalStorageUtil";

const ProductPaymentCheckoutForm = forwardRef((props, ref) => {
  const {
    onProcassingChange,
    onSucessCheck,
    checkoutPageData,
    clientInformationData,
  } = props;
  const userProductByNumebr = getFromLocalStorage("productnumber");

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const handleProductPayment = async () => {
    if (!stripe || !elements) return;
    if (checkoutPageData?.stock <= 0) {
      toast.error("Product Stock Out");
      return;
    }

    onProcassingChange?.(true);

    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: user?.displayName,
        email: user?.email,
      },
    });

    if (error) {
      toast.error(error.message);
      // $&
      onProcassingChange?.(false);
      return;
    }

    toast.success("Alhamdulillah! Successfully created payment method");
    // $&
    console.log(
      "alhamdulillah props clint information is",
      clientInformationData
    );

    //   Update product stock

    try {
      const { data } = await axios.patch(
        `http://localhost:5000/updateProductStock`,
        {
          productId: checkoutPageData?._id,
          quantity: userProductByNumebr,
        }
      );

      if (data.acknowledged && data.modifiedCount > 0) {
        // $&
        toast.success("Stock updated successfully");
      } else {
        console.warn("  Stock update failed or no change made");
        toast.warning("No stock updated");
      }
    } catch (err) {
      console.error("  Error updating stock:", err);
      toast.error(err);
    }

    if (clientInformationData !== null) {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/postPaymentInformation",
          { clientInformationData }
        );

        // $&

        if (data.insertedId) {
          // $&
          toast.success("Client information posted successfully");
        } else {
          // $&
          toast.warning("Client information not posted");
        }
      } catch (err) {
        console.error("Error posting client information:", err);
        toast.error("Something went wrong while posting client info.");
      }
    }

    onSucessCheck?.(true);
    cardElement.clear();
    onProcassingChange?.(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      runPayment: handleProductPayment,
    }),
    [stripe, elements]
  );

  return (
    <div className="px-5 pb-5 space-y-[16px]">
      <div>
        <label className={globalStyles.labelStyles}>Card Details</label>
        <div className="p-3 rounded-md border">
          <CardElement options={{ hidePostalCode: true }} />
        </div>
      </div>
    </div>
  );
});

ProductPaymentCheckoutForm.displayName = "ProductPaymentCheckoutForm";
export default ProductPaymentCheckoutForm;
