const Promotion = () => {
  return (
    <div
      className="my-16 bg-gray-50"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 w-10/12 mx-auto h-[600px] ">
        <div>
          <img
             className="h-[600px]"
            src="https://i.ibb.co/YZPdP3T/about.png"
            alt=""
          />
        </div>
        <div className="flex justify-center   flex-col ">
                <p className="text-green-500">Promotion</p>
                 <p className="font-Outfit text-4xl text-[700]">
                 Healing starts here</p>
                 <p className="font-Outfit text-md text-[#788094] m ">Mtandard dummy texr since when an unknown printer took a galley.MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam s standard dummy texr since when an unknown printer took a galley consetetur.</p>
                 <p>
                    <img className="w-32" src="https://i.ibb.co/4p1Rvvq/sign1.png" alt="" />
                 </p>
                 
        </div>
        <div className="flex justify-center item-center flex-col space-y-5 ">
            <div className="bg-[#396CF0] p-5 text-white">
              <p className="font-Outfit font-bold">View Speacial  Doctor {"->"}</p>
            </div>
            <div className="bg-[#396CF0] p-5 text-white">
              <p className="font-Outfit font-bold">Our All Location{"->"}</p>
            </div>
            <div className="bg-[#396CF0] p-5 text-white">
              <p className="font-Outfit font-bold">We Have  Medical Farms {"->"}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
