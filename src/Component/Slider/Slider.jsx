import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
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
    <div className="bg-[#E5F8FC] h-auto md:h-[600px] py-8 md:py-0">
      <div className="w-11/12 mx-auto lg:flex justify-between items-center">
        <div className="space-y-3 w-full lg:w-1/2">
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
          <p className="lg:text-7xl md:text-4xl text-2xl font-bold font-Outfit">
            {getStyledBannerTitle(activeBannerData?.bannertitle)}
          </p>
          <p className="font-Outfit text-[#788094]">
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
            className="h-auto md:h-[600px] object-cover overflow-hidden"
            src={activeBannerData?.bannerimg}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
