import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../Shyerd/Footer/Footer";
import { Link } from "react-router-dom";

const ViewProduct = () => {
  const [rating, setRating] = useState(5);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-ass-12-server.vercel.app/getProducts"
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white text-black">
      {/* product view section */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {productData?.map((dataProduct, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-md p-5 bg-white text-black shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* product image */}
            <img
              alt="product/image"
              src={dataProduct?.imageUrl}
              className="w-[150px] h-[150px] object-contain mt-2 mx-auto"
            />

            {/* product details */}
            <div className="mt-3">
              <h3 className="text-[1.1rem] font-semibold">
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
                          starRating <= rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        size={16}
                        onClick={() => setRating(starRating)}
                      />
                    );
                  })}
                </div>
                <span className="text-[0.9rem] text-gray-600">(43)</span>
              </div>

              <div className="flex items-end justify-between mt-3">
                <div>
                  <p className="text-[0.9rem] text-gray-600">
                    {dataProduct?.stock} <span>In Stock</span>
                  </p>
                  <p className="text-[1rem] font-semibold mt-1 text-[#0FABCA]">
                    <span>$</span> {dataProduct?.price}
                  </p>
                </div>

                <Link
                  to={`/productDetails/${dataProduct?._id}`}
                  className="py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200"
                >
                  Buy Now
                  <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default ViewProduct;
