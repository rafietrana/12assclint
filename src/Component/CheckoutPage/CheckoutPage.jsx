import { useState } from "react";

// data
import { countries, regions, cities } from "./Data.js";

// global styles
import { globalStyles } from "./GlobalStyles.js";

// select component
import Select from "./Select.jsx";
import Footer from "../../Shyerd/Footer/Footer.jsx";
import { useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

    const productDatas = useLoaderData();
 
    // const {
    //   medicineName,
    //   brand,
    //   price,
    //   category,
    //   stock,
    //   _id,
    //   imageUrl,
    //   description,
    // } = productDatas;
  
    console.log("alhamdulillah productDatas is from checkoutpage", productDatas);

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[#F1F5F9] h-[300px] flex flex-col justify-center items-center text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-semibold font-Outfit">
          View Product
        </h1>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-green-600">
                Home
              </a>
            </li>
            <li className="text-green-600 font-medium">Products</li>
          </ul>
        </div>
      </div>

      <div className="grid mt-10 mb-28 gap-8 grid-cols-1 w-10/12 mx-auto md:grid-cols-3  ">
        {/* Billing and Payment Form */}
        <div className="md:col-span-2 space-y-8 w-full">
          {/* Billing Information */}
          <div className="w-full">
            <h2 className="text-[1.5rem] dark:text-[#abc2d3] font-medium text-gray-700 mb-6">
              Billing Information
            </h2>

            <div className="grid  gap-[16px]">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="firstName"
                    className={`${globalStyles.labelStyles}`}
                  >
                    First name
                  </label>
                  <input
                    placeholder="First name"
                    type="text"
                    id="firstName"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="lastName"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Last name
                  </label>
                  <input
                    placeholder="Last name"
                    type="text"
                    id="lastName"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className={`${globalStyles.labelStyles}`}
                >
                  Company Name (Optional)
                </label>
                <input
                  placeholder="Company name"
                  type="text"
                  id="company"
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className={`${globalStyles.labelStyles}`}
                >
                  Address
                </label>
                <input
                  placeholder="Address"
                  type="text"
                  id="address"
                  className={`${globalStyles.inputStyles}`}
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="country"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Country
                  </label>
                  <Select items={countries} />
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="state"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Region/State
                  </label>
                  <Select items={regions} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="city"
                    className={`${globalStyles.labelStyles}`}
                  >
                    City
                  </label>
                  <Select items={cities} />
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="zipCode"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Zip Code
                  </label>
                  <input
                    placeholder="Zip code"
                    type="text"
                    id="zipCode"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Email
                  </label>
                  <input
                    placeholder="Email address"
                    type="email"
                    id="email"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="phone"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Phone Number
                  </label>
                  <input
                    placeholder="Phone number"
                    type="tel"
                    id="phone"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center gap-[10px] cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleCheckboxChange}
                />
                {isChecked ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 335">
                      <rect
                        id="Rectangle 331"
                        x="-0.00012207"
                        y="6.10352e-05"
                        width="20"
                        height="20"
                        rx="4"
                        className="fill-[#0FABCA]"
                        stroke="#0FABCA"
                      ></rect>
                      <path
                        id="Vector"
                        d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 335">
                      <rect
                        id="Rectangle 331"
                        x="-0.00012207"
                        y="6.10352e-05"
                        width="20"
                        height="20"
                        rx="4"
                        className="fill-transparent dark:stroke-slate-400"
                        stroke="#ccc"
                      ></rect>
                    </g>
                  </svg>
                )}

                <span className="text-[0.9rem] dark:text-slate-400 text-gray-700">
                  Ship to a different address
                </span>
              </label>
            </div>
          </div>

          {/* Payment Options */}
          <div className="border border-gray-200 dark:border-slate-700 rounded-md">
            <h2 className="text-[1.2rem] font-medium text-gray-700 dark:border-slate-700 border-b border-gray-200 px-5 py-3 dark:text-[#abc2d3]">
              Payment Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-5">
              <button
                onClick={() => setSelectedPayment("cash")}
                className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                  selectedPayment === "cash"
                    ? "border-[#0FABCA]"
                    : "border-gray-200 dark:border-slate-700"
                }`}
              >
                <span className="text-2xl">💵</span>
                <span className="text-[0.9rem] dark:text-[#abc2d3] text-gray-700 font-[500] mt-2">
                  Cash on Delivery
                </span>
              </button>
              <button
                onClick={() => setSelectedPayment("credit-card")}
                className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                  selectedPayment === "credit-card"
                    ? "border-[#0FABCA]"
                    : "border-gray-200 dark:border-slate-700"
                }`}
              >
                <span className="text-2xl">💳</span>
                <span className="text-[0.9rem] dark:text-[#abc2d3] text-gray-700 font-[500] mt-2">
                  Debit/Credit Card
                </span>
              </button>
            </div>

            {selectedPayment === "credit-card" && (
              <div className=" px-5 pb-5 space-y-[16px]">
                <div>
                  <label
                    htmlFor="cardName"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Name on Card
                  </label>
                  <input
                    placeholder="Name on card"
                    type="text"
                    id="cardName"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cardNumber"
                    className={`${globalStyles.labelStyles}`}
                  >
                    Card Number
                  </label>
                  <input
                    placeholder="Card number"
                    type="text"
                    id="cardNumber"
                    className={`${globalStyles.inputStyles}`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expireDate"
                      className={`${globalStyles.labelStyles}`}
                    >
                      Expire Date
                    </label>
                    <input
                      type="text"
                      id="expireDate"
                      placeholder="MM/YY"
                      className={`${globalStyles.inputStyles}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvc"
                      className={`${globalStyles.labelStyles}`}
                    >
                      CVC
                    </label>
                    <input
                      placeholder="CVC"
                      type="text"
                      id="cvc"
                      className={`${globalStyles.inputStyles}`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-[1.2rem] dark:text-[#abc2d3] font-medium text-gray-700 mb-4">
              Additional Information
            </h2>
            <div>
              <label htmlFor="notes" className={`${globalStyles.labelStyles}`}>
                Order Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Notes about your order e.g. special notes for delivery"
                className={`${globalStyles.inputStyles} py-3`}
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full">
          <div className="bg-white dark:bg-slate-900 dark:border-slate-700 rounded-md border border-gray-200 p-6">
            <h2 className="text-[1.2rem] dark:text-[#abc2d3] font-medium text-gray-700 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://i.ibb.co.com/VNM4dX6/Image-24.png"
                    alt="product/image"
                    className="w-[50px] h-[50px] object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm dark:text-[#abc2d3] font-medium text-gray-900 line-clamp-1">
                    Canon EOS 1500D DSLR Camera Body+ 18
                  </p>
                  <div className="flex items-center gap-[5px] mt-0.5">
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      2 x{" "}
                    </p>
                    <p className="text-sm text-[#0FABCA] font-[600]">$570</p>
                  </div>
                </div>
              </div> */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://i.ibb.co.com/F0bn52F/Image-25.png"
                    alt="product/image"
                    className="w-[50px] h-[50px] object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm dark:text-[#abc2d3] font-medium text-gray-900 line-clamp-1">
                    Wired Over-Ear Gaming Headphones with U
                  </p>
                  <div className="flex items-center gap-[5px] mt-0.5">
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      1 x{" "}
                    </p>
                    <p className="text-sm text-[#0FABCA] font-[600]">$100</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-[#abc2d3]">
                    Sub-total
                  </span>
                  <span className="font-medium text-gray-800 dark:text-[#abc2d3]">
                    $670
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-[#abc2d3]">
                    Shipping
                  </span>
                  <span className="font-medium text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-[#abc2d3]">
                    Discount
                  </span>
                  <span className="font-medium text-gray-800 dark:text-[#abc2d3]">
                    $20
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-[#abc2d3]">Tax</span>
                  <span className="font-medium text-gray-800 dark:text-[#abc2d3]">
                    $650
                  </span>
                </div>
              </div>

              <div className="border-t dark:border-slate-700 border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-base font-medium dark:text-[#abc2d3] text-gray-800">
                    Total
                  </span>
                  <span className="text-base font-medium dark:text-[#abc2d3] text-gray-800">
                    $357.99 USD
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#0FABCA] text-white py-3 px-4 rounded-lg hover:bg-[#0FABCA]/90 transition-colors">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CheckoutPage;
