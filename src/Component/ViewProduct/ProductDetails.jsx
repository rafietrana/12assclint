import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Shyerd/Footer/Footer";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import { saveToLocalStorage } from "../Utilitis/LocalStorageUtil";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { getFinalPayment } = useAuth();

  const {
    medicineName,
    brand,
    price,
    category,
    stock,
    _id,
    imageUrl,
    description,
  } = productData;

  const [countValue, setCountValue] = useState(1);

  const handleIncrement = () => {
    setCountValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (countValue > 1) setCountValue((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) setCountValue(value);
  };

  const finalPaymentPrice = countValue * price;

  saveToLocalStorage("totalmony", finalPaymentPrice);
  saveToLocalStorage("productnumber", countValue);

  useEffect(() => {
    getFinalPayment(finalPaymentPrice, countValue);
  }, [finalPaymentPrice, countValue, getFinalPayment]);

  return (
    <div className="bg-white text-gray-800" style={{ colorScheme: "light" }}>
      {/* Banner Section */}
      <div className="bg-[#F1F5F9] h-[260px] flex flex-col justify-center items-center text-center space-y-2">
        <h1 className="text-4xl font-bold font-Outfit">Product Details</h1>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-green-600 transition">Home</Link>
            </li>
            <li className="text-green-600 font-medium">Product Details</li>
          </ul>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt={medicineName}
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">{medicineName}</h2>
            <p className="text-lg font-medium text-gray-600">
              Brand: <span className="text-red-500">{brand}</span>
            </p>

            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-green-600">
                ${finalPaymentPrice}
              </p>

              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <FiMinus />
                </button>
                <input
                  type="number"
                  min={1}
                  value={countValue}
                  onChange={handleInputChange}
                  className="w-16 text-center outline-none"
                />
                <button
                  onClick={handleIncrement}
                  className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            <p className="text-sm">Category: <span className="font-medium">{category}</span></p>
            <p className="text-sm">In Stock: <span className="font-medium">{stock}</span></p>

            <div
              className="mt-4 text-sm leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>

            <Link to={`/checkoutPage/${_id}`}>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
