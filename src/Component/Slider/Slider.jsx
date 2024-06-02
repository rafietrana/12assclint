const Slider = () => {
  return (
    <div className="bg-[#E5F8FC]   h-[600px]  ">
      <div className="w-10/12 mx-auto lg:flex  justify-between   items-center">
        <div className="space-y-3 w-full md:w-1/2 ">
          <p className="font-Outfit uppercase bg-green font-bold text-[#0DD07D]">
            24/7 EMERGENCY SERVICE
          </p>
          <p className="text-7xl font-bold font-Outfit space-y-3 ">
            Caring for <span className="text-[#0DD07D]">Health</span> <br />
            Caring for You
          </p>
          <p className="font-Outfit text-[#788094]">
            A brief statement outlining the purpose and mission of the clinic.
            This can include the commitment to patient care, community health
          </p>
          <div className="flex gap-2 py-5  ">
            <div>
              <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                discover More
              </button>
            </div>

            <div>
              <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                see all services
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden lg:block w-full ">
          <img
            className="h-[600px] object-cover overflow-hidden"
            src="https://i.ibb.co/xSX90Gz/hero-2-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
