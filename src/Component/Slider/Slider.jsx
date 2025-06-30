import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Slider = () => {
  const { data: activeBannerData = [] } = useQuery({
    queryKey: ["activeBanner"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getactivebanner").then(
        (res) => res.data
      ),
  });

  // $&

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
    <motion.div
      className="md:h-[600px] py-8 md:py-0 md:pt-10 relative "
   
    >
      {/* Background Images with Animation */}
      <motion.img
        className="absolute opacity-0 md:opacity-100 left-0 top-0 h-[400px] lg:h-[640px] w-full -z-10"
        src="https://i.ibb.co.com/YFQfmXcx/slidershap.jpg"
        alt=""
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1.2 }}
      />
      <motion.img
        className="absolute opacity-0 md:opacity-100 right-[35%] top-10 size-14"
        src="https://i.ibb.co.com/Zz7FHyn7/drugs.png"
        alt=""
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        className="absolute opacity-0 md:opacity-100 right-[15%] top-48 size-20"
        src="https://i.ibb.co.com/203v9cY5/rightsideshape.png"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        className="absolute opacity-0 md:opacity-100 right-[39%] top-[60%] size-11"
        src="https://i.ibb.co.com/20vN3KzD/medical.png"
        alt=""
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Content Section */}
      <motion.div
        className="w-10/12 mx-auto lg:flex justify-between items-center"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        {/* Left Side Content */}
        <motion.div
          className="space-y-3 w-full lg:w-1/2"
          variants={fadeIn("left", 0.3)}
        >
          {/* Discount Section */}
          <motion.div
            className="flex items-center gap-2"
            variants={fadeIn("up", 0.3)}
          >
            <motion.img
              src="https://i.ibb.co.com/4wpZ9gwc/rana.png"
              alt=""
              animate={{ scale: [0.8, 1] }}
              transition={{ duration: 0.5 }}
            />
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
          </motion.div>

          {/* Title Section */}
          <motion.div
            className="lg:text-7xl  text-[#000D44]  md:text-4xl text-2xl font-bold font-Outfit"
            variants={fadeIn("up", 0.4)}
          >
            {getStyledBannerTitle(activeBannerData?.bannertitle)}
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-Outfit text-[#788094] text-[16px]"
            variants={fadeIn("up", 0.5)}
          >
            {activeBannerData?.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-2 py-5"
            variants={fadeIn("up", 0.6)}
          >
            <motion.button
              className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
            >
              Discover More
            </motion.button>
            <Link to="/alltestpage">
              <motion.button
                className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
              >
                All Test Page
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          variants={fadeIn("right", 0.4)}
        >
          <motion.img
            className="h-auto hidden md:block md:h-[600px] object-cover overflow-hidden"
            src={activeBannerData?.bannerimg}
            alt="Banner"
            animate={{ opacity: [0, 1], scale: [0.8, 1] }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
