import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
  const { data: activeBannerData = [] } = useQuery({
    queryKey: ["activeBanner"],
    queryFn: () =>
      axios("http://localhost:5000/getactivebanner").then((res) => {
        return res.data;
      }),
  });

  console.log("alhamdulillah active bannerdata is mashallah", activeBannerData);

  const getStyledBannerTitle = (title) => {
    if (!title) return "";

    const words = title.split(" ");
    if (words.length < 3) return title;
    console.log("alhamdulillah word is ", words);

    return (
      <>
        {words.slice(0, 2).join(" ")}{" "}
        <span className="text-green-500">{words[2]}</span>{" "}
        {words.slice(3).join(" ")}
      </>
    );
  };

  return (
    <div className="bg-[#E5F8FC]   h-[600px]  ">
      <div className="w-10/12 mx-auto lg:flex  justify-between   items-center">
        <div className="space-y-3 w-full md:w-1/2 ">
          <p className="font-Outfit uppercase bg-green font-bold text-[#0DD07D]">
            For <span className="text-blue-500"> {activeBannerData?.couponrate} %</span> Descount Apply <span className="text-blue-500"> {activeBannerData?.couponcode}</span>
          </p>
          <p className="text-7xl font-bold font-Outfit space-y-3 ">
            {/* Caring for <span className="text-[#0DD07D]">Health</span> <br />
            Caring for You */}
            {getStyledBannerTitle(activeBannerData?.bannertitle)}
          </p>
          <p className="font-Outfit text-[#788094]">
            {activeBannerData?.description}
          </p>
          <div className="flex gap-2 py-5  ">
            <div>
              <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                discover More
              </button>
            </div>

            <div>
                <Link to={'/alltestpage'}>
                <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                All Test Page
              </button>
                </Link>

            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden lg:block w-full  ">
          <img
            className="h-[600px] object-cover overflow-hidden"
            src={activeBannerData?.bannerimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
