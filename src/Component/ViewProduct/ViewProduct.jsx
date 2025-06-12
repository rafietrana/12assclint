import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../Shyerd/Footer/Footer";
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const [rating, setRating] = useState(5);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getProducts");

        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  });

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

      {/* product view section */}
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-5  mt-10  mb-28 ">{productData?.map((dataProduct, idx) =>(
          <div key={idx} className="border dark:border-slate-700 border-gray-300 rounded-md p-5">
        {/* product image */}
        <img
          alt="product/image"
          src={dataProduct?.imageUrl}
          className="w-[150px] mt-2"
        />

        {/* product details */}
        <div className="mt-3">
          <h3 className="text-[1.1rem] dark:text-[#abc2d3] font-semibold">
            {dataProduct?.medicineName}
          </h3>

          {/* rating area */}
          <div className="flex items-center gap-[10px] mt-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                  <FaStar
                    key={starRating}
                    className={`cursor-pointer ${
                      starRating <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    size={16}
                    onClick={() => setRating(starRating)}
                  />
                );
              })}
            </div>
            <span className="text-[0.9rem] dark:text-slate-400 text-gray-500">
              (43)
            </span>
          </div>

          <div className="flex items-end justify-between mt-2">
            <div>
              <p className="text-[0.9rem] dark:text-slate-400 text-gray-500">
               {dataProduct?.stock}    <span> In Stock </span>
              </p>
              <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">
                <span>$</span>   {dataProduct?.price}
              </p>
            </div>

            <Link to={`/productDetails/${dataProduct?._id}`} className="py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200">
              Add to Cart
              <FaPlus />
            </Link>
          </div>
        </div>
      </div>
      ))}</div>

      {/* product section */}

        <Footer></Footer>
    </div>
  );
};

export default ViewProduct;
