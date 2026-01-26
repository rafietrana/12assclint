import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Pages/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const fetchActiveBanner = async () => {
  const response = await axios(
    "https://my-ass-12-server.vercel.app/getactivebanner"
  );
  return response.data;
};

const PaymentModal = ({
  isOpen,
  refetch,
  closeModal,
  paymentPrice,
  paymentCollectionId,
  testInfo,
}) => {
  const { price } = paymentPrice;
  const [finalPaymentPrice, setFinalPaymentPrice] = useState(null);

  useEffect(() => {
    setFinalPaymentPrice(parseFloat(price));
  }, [price]);

  const { data: getTrueBanner = {} } = useQuery({
    queryKey: ["getTrueBanner"],
    queryFn: fetchActiveBanner,
  });

  const handleApplyCouponBtn = (e) => {
    e.preventDefault();
    // // $&

    const couponCode = e.target.couponname.value.trim();
    const bannerCouponCode = getTrueBanner?.couponcode?.trim();

    // // $&
    // // $&

    if (couponCode === bannerCouponCode) {
      // // $&

      const intPrice = parseFloat(price);
      const intCouponRate = parseFloat(getTrueBanner.couponrate);

      const discount = (intPrice * intCouponRate) / 100;
      const finalPrice = intPrice - discount;
      // // $&
      setFinalPaymentPrice(finalPrice);
    } else {
      // // $&
    }
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-black  my-5"
                  >
                    Payment For Test
                  </DialogTitle>
                  <div className="mt-2">
                    <form onSubmit={handleApplyCouponBtn}>
                      <label className="mb-5 text-black font-Outfit font-medium">
                        Have Any Coupon?
                      </label>
                      <input
                        type="text"
                        placeholder="Apply Coupon"
                        name="couponname"
                        className="w-full p-3 bg-gray-100 rounded-lg my-3 font-outfit font-medium border outline-none"
                      />

                      <input
                        className="bg-gradient-to-b from-gray-50 to-bg-gray-100 text-black font-medium py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 cursor-pointer ease-in-out"
                        type="submit"
                        value="Apply Now"
                      />
                    </form>
                    <div>
                      <Elements stripe={stripePromise}>
                        <CheckoutForm
                          finalPaymentPrice={finalPaymentPrice ?? price}
                          closeModal={closeModal}
                          paymentCollectionId={paymentCollectionId}
                          refetch={refetch}
                          testInfo={testInfo}
                        />
                      </Elements>
                    </div>
                  </div>

                  {finalPaymentPrice !== null && (
                    <div className="mt-4 text-center">
                      <p className="text-lg font-medium text-black">
                        Final Payment Price: {finalPaymentPrice ?? price} Taka
                      </p>
                    </div>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PaymentModal;
