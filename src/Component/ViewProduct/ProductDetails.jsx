import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Shyerd/Footer/Footer";
import { Button } from "@headlessui/react";
import {FiMinus, FiPlus} from "react-icons/fi";
import { useEffect, useState } from "react";
import useAuth from './../../Hooks/useAuth';
import { saveToLocalStorage } from "../Utilitis/LocalStorageUtil";

const ProductDetails = () => {
  const productData = useLoaderData();
  const {getFinalPayment } = useAuth();
  console.log("alhamdulilllah one product data is ", productData);
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


  console.log("alhamdulillah productData is", productData);
  // increment Decrement functionality
  const [countValue, setCountValue] = useState(1);

    const handleIncrement = () => {
        setCountValue((prevValue) => prevValue + 1);
    };

    const handleDecrement = () => {
      if(countValue == 1){
        return;
      }
        setCountValue((prevValue) => prevValue - 1);
    };

    const handleInputChange = (e) =>{
     setCountValue(Number(e.target.value))
    }
  // FinalPayment Price
      const finalPaymentPrice = countValue * price;
      
        // store this finalPayment and FinalPaymentNumber on Localstoreage
        saveToLocalStorage("totalmony", finalPaymentPrice),
          saveToLocalStorage("productnumber",  countValue);


      useEffect(()=>{
    getFinalPayment(finalPaymentPrice, countValue);
      },[finalPaymentPrice, getFinalPayment, countValue])
  




 
      
      
     
    

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[#F1F5F9] h-[300px] flex flex-col justify-center items-center text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-semibold font-Outfit">
          Product Details
        </h1>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-green-600">
                Home
              </a>
            </li>
            <li className="text-green-600 font-medium">Product Details</li>
          </ul>
        </div>
      </div>
      {/* product details section */}
      <div className="max-w-5xl mx-auto p-6 bg-white   rounded-2xl my-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2    ">
            <img
              src={imageUrl}
              alt={medicineName}
              className="rounded-xl  w-full h-auto  object-cover "
            />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{medicineName}</h2>
            <p className="text-lg text-gray-600 font-medium">
              Brand: <span className="text-red-500">{brand}</span>
            </p>
            <div className=" flex gap-5 items-center ">
              <div>
  <p className="text-xl font-semibold text-green-600">${price * countValue}</p>
              </div>
              <div>
          <div className="flex items-center mx-auto border dark:border-slate-700 border-gray-200 rounded-md">
            <button
                className="bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-l-md text-gray-700 text-[1.1rem]"
                onClick={handleDecrement}
            >
                <FiMinus/>
            </button>
            <input
                type="number"
                value={countValue}
                className="w-[70px] py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]"
                onInput={handleInputChange}
            />
            <button
                className="bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-r-md text-gray-700 text-[1.1rem]"
                onClick={handleIncrement}
            >
                <FiPlus/>
            </button>
        </div>
              </div>
          

            </div>
           
            <p className="text-sm text-gray-500">Category: {category}</p>
            <p className="text-sm text-gray-500">In Stock: {stock}</p>

            <div
              className="prose prose-blue max-w-full mt-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>


            <Link to={`/checkoutPage/${_id}`}>
              <Button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
                CheckOut
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
