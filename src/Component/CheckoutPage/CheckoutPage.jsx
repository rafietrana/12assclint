import { useRef, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { countries, regions, cities } from "./Data.js";
import { globalStyles } from "./GlobalStyles.js";
import Select from "./Select.jsx";
import Footer from "../../Shyerd/Footer/Footer.jsx";
import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../Utilitis/LocalStorageUtil.js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductPaymentCheckoutForm from "./ProductPaymentCheckoutForm.jsx";

const CheckoutPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const localStoreageFinalPayment = getFromLocalStorage("totalmony");
  const localStoreageFinalPaymentNumber = getFromLocalStorage("productnumber");
  const [countrySelectValue, setCountrySelectValue] = useState("");
  const [regionsSelectedValue, setRegionsSelectedValue] = useState("");
  const [citiesSelectedValue, setCitiesSelectedValue] = useState("");
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const shippingPayment = isChecked ? 70 : 0;
  const finalStripeAddPayemnt = shippingPayment + localStoreageFinalPayment;
  const [isProcassing, setIsProcassing] = useState(false);
  const [isSusessed, setIsSucessed] = useState(false);
  const [outsideClintInformationDate, setOutsideClintInformationData] = useState(null);
  const checkoutPageData = useLoaderData();
  const formRef = useRef(null);
  const productDatas = useLoaderData();
  const { medicineName, imageUrl } = productDatas;

  const handlePlaceOrder = () => {
    if (formRef.current) {
      setTimeout(() => {
        formRef.current.runPayment();
      }, 0);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFormSubmitButton = async (e) => {
    e.preventDefault();
    const forms = e.target;
    const firstName = forms.firstName.value;
    const lastName = forms.lastName.value;
    const company = forms.company.value;
    const address = forms.Address.value;
    const zipCode = forms.zipCode.value;
    const email = forms.email.value;
    const phoneNumber = forms.phoneNumber.value;

    const clintInformationData = {
      firstName,
      lastName,
      company,
      address,
      country: countrySelectValue,
      regions: regionsSelectedValue,
      cities: citiesSelectedValue,
      zipCode,
      email,
      phoneNumber,
      shipToDifferentAddress: isChecked,
    };

    setOutsideClintInformationData(clintInformationData);

    // stripe functionality

    try {
      await axios.post(
        "https://my-ass-12-server.vercel.app/create-payment-intent",
        finalStripeAddPayemnt
      );
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleSelectChange = (value) => {
    if (countries.includes(value)) {
      setCountrySelectValue(value);
    } else if (regions.includes(value)) {
      setRegionsSelectedValue(value);
    } else if (cities.includes(value)) {
      setCitiesSelectedValue(value);
    }
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-white dark:text-gray-900">
      {/* Banner */}
      <div className="bg-[#F1F5F9] h-[300px] flex flex-col justify-center items-center text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-semibold font-Outfit text-[#000D44]">View Product</h1>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-green-600">Home</a>
            </li>
            <li className="text-green-600 font-medium">Products</li>
          </ul>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleFormSubmitButton}>
        <div className="grid mt-10 mb-28 gap-8 grid-cols-1 w-10/12 mx-auto md:grid-cols-3">
          {/* Form + Payment */}
          <div className="md:col-span-2 space-y-8 w-full">
            {/* Billing Info */}
            <div className="w-full">
              <h2 className="text-[1.5rem] font-medium text-gray-700 mb-6">Billing Information</h2>

              <div className="grid gap-4">
                {/* First & Last Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label htmlFor="firstName" className={globalStyles.labelStyles}>First name</label>
                    <input required name="firstName" id="firstName" type="text" placeholder="First name" className={globalStyles.inputStyles} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className={globalStyles.labelStyles}>Last name</label>
                    <input required name="lastName" id="lastName" type="text" placeholder="Last name" className={globalStyles.inputStyles} />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={globalStyles.labelStyles}>Company (Optional)</label>
                  <input required name="company" id="company" type="text" placeholder="Company name" className={globalStyles.inputStyles} />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="Address" className={globalStyles.labelStyles}>Address</label>
                  <input required name="Address" id="Address" type="text" placeholder="Address" className={globalStyles.inputStyles} />
                </div>

                {/* Country, Region, City */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className={globalStyles.labelStyles}>Country</label>
                    <Select onChange={handleSelectChange} items={countries} />
                  </div>
                  <div className="w-full">
                    <label className={globalStyles.labelStyles}>Region/State</label>
                    <Select onChange={handleSelectChange} items={regions} />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className={globalStyles.labelStyles}>City</label>
                    <Select onChange={handleSelectChange} items={cities} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="zipCode" className={globalStyles.labelStyles}>Zip Code</label>
                    <input required name="zipCode" id="zipCode" type="text" placeholder="Zip code" className={globalStyles.inputStyles} />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label htmlFor="email" className={globalStyles.labelStyles}>Email</label>
                    <input required name="email" id="email" type="email" placeholder="Email address" className={globalStyles.inputStyles} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phoneNumber" className={globalStyles.labelStyles}>Phone Number</label>
                    <input required name="phoneNumber" id="phoneNumber" type="tel" placeholder="Phone number" className={globalStyles.inputStyles} />
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-2 mt-4">
                  <input type="checkbox" className="hidden" onChange={handleCheckboxChange} />
                  <div className={`w-5 h-5 border rounded ${isChecked ? "bg-[#0FABCA]" : "bg-transparent border-gray-400"}`}></div>
                  <span className="text-gray-700">Ship Outside Bangladesh</span>
                </label>
              </div>
            </div>

            {/* Payment Section */}
            <div className="border border-gray-200 rounded-md">
              <h2 className="text-lg font-medium text-gray-700 border-b px-5 py-3">Payment Option</h2>
              <div className="px-5 pb-5">
                <Elements stripe={stripePromise}>
                  <ProductPaymentCheckoutForm
                    ref={formRef}
                    onProcassingChange={setIsProcassing}
                    onSucessCheck={setIsSucessed}
                    checkoutPageData={checkoutPageData}
                    clientInformationData={outsideClintInformationDate}
                  />
                </Elements>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full">
            <div className="bg-white border border-gray-200 rounded-md p-6">
              <h2 className="text-lg font-medium text-gray-700 mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={imageUrl} alt="product" className="w-12 h-12 object-cover" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{medicineName}</p>
                    <p className="text-sm text-gray-500">{localStoreageFinalPaymentNumber} x ${localStoreageFinalPayment}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Sub-total</span><span>${localStoreageFinalPayment}</span></div>
                  <div className="flex justify-between"><span>Shipping</span><span>{isChecked ? "$70" : "Free"}</span></div>
                  <div className="flex justify-between"><span>Discount</span><span>$0</span></div>
                  <div className="flex justify-between"><span>Tax</span><span>$0</span></div>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-base font-medium text-gray-800">
                  <span>Total</span>
                  <span>${finalStripeAddPayemnt} USD</span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#0FABCA] text-white py-3 px-4 rounded-lg hover:bg-[#0FABCA]/90 transition-colors"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isProcassing && <AiOutlineLoading className="animate-spin text-lg" />}
                    PLACE ORDER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
