import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Slider = () => {
  console.log(fadeIn);

  const { data: activeBannerData = [] } = useQuery({
    queryKey: ["activeBanner"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getactivebanner").then(
        (res) => {
          return res.data;
        }
      ),
  });

  const getStyledBannerTitle = (title) => {
    if (!title) return "";

    const words = title.split(" ");
    if (words.length < 3) return title;

    return (
      <>
        {words.slice(0, 2).join(" ")}{" "}
        <span className="text-green-500">{words[2]}</span>{" "}
        {words.slice(3).join(" ")}
      </>
    );
  };

  return (
    <div className="  md:h-[600px] py-8 md:py-0 relative">
      <img
        className="absolute opacity-0 md:opacity-100 left-0 top-0 h-[600px] w-full -z-10"
        src="https://i.ibb.co.com/YFQfmXcx/slidershap.jpg"
        alt=""
      />
      <img
        className="absolute opacity-0 md:opacity-100 right-[35%] top-10 animate-bounce [animation-duration:2s] size-14"
        src="https://i.ibb.co.com/Zz7FHyn7/drugs.png"
        alt=""
      />
      <img
        className="absolute  opacity-0 md:opacity-100 right-[15%] top-48 animate-spin [animation-duration:3s] size-20"
        src="https://i.ibb.co.com/203v9cY5/rightsideshape.png"
        alt=""
      />
      <img
        className="absolute opacity-0 md:opacity-100  right-[39%] top-[60%] animate-spin [animation-duration:4s] size-11"
        src="https://i.ibb.co.com/20vN3KzD/medical.png"
        alt=""
      />
      <div className="w-10/12  mx-auto lg:flex justify-between items-center">
        <div className="space-y-3 w-full lg:w-1/2">
          <motion.div
            className="flex  items-center gap-2"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div>
              <img src="https://i.ibb.co.com/4wpZ9gwc/rana.png" alt="" />
            </div>
            <div>
              {" "}
              <p className="font-Outfit uppercase bg-green font-bold text-[#0DD07D]">
                For{" "}
                <span className="text-blue-500">
                  {activeBannerData?.couponrate}%
                </span>{" "}
                Discount Apply{" "}
                <span className="text-blue-500">
                  {activeBannerData?.couponcode}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:text-7xl md:text-4xl text-2xl font-bold font-Outfit"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}>
            {getStyledBannerTitle(activeBannerData?.bannertitle)}
          </motion.div>
          <p className="font-Outfit text-[#788094] text-[16px]">
            {activeBannerData?.description}
          </p>
          <div className="flex flex-wrap gap-2 py-5">
            <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Discover More
            </button>
            <Link to="/alltestpage">
              <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                All Test Page
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            className="h-auto   hidden md:block md:h-[600px]  object-cover overflow-hidden"
            src={activeBannerData?.bannerimg}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
