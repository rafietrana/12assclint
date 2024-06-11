const Promotion = () => {
  return (
    <div className=" bg-gray-50  ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 w-10/12 mx-auto h-auto md:h-[600px]">
        <div className="flex justify-center md:justify-start">
          <img className="w-full h-auto md:h-[600px]" src="https://i.ibb.co/YZPdP3T/about.png" alt="Promotion" />
        </div>
        <div className="flex justify-center flex-col text-center md:text-left">
          <p className="text-green-500">Promotion</p>
          <p className="font-Outfit text-4xl font-bold">
            Healing starts here
          </p>
          <p className="font-Outfit text-md text-[#788094] my-4">
            Standard dummy text since when an unknown printer took a galley. MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At accusam aliquyam, it has been a standard dummy text since when an unknown printer took a galley consetetur.
          </p>
          <p className="flex justify-center md:justify-start">
            <img className="w-32" src="https://i.ibb.co/4p1Rvvq/sign1.png" alt="Signature" />
          </p>
        </div>
        <div className="flex flex-col space-y-5 md:item-center   md:justify-center">
          <div className="bg-[#396CF0] p-5 text-white text-center md:text-left">
            <p className="font-Outfit font-bold">View Special Doctor {"->"}</p>
          </div>
          <div className="bg-[#396CF0] p-5 text-white text-center md:text-left">
            <p className="font-Outfit font-bold">Our All Locations {"->"}</p>
          </div>
          <div className="bg-[#396CF0] p-5 text-white text-center md:text-left">
            <p className="font-Outfit font-bold">We Have Medical Farms {"->"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
