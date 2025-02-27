const BookAnAppoinment = () => {
  return (
    <div className=" -z-30 ">
        <div className="bg-[#F5F7FA]">
        <p className="text-[100px] text-white tracking-[0.5em] font-bold ">MEDIX</p>
        </div>
    
      {/* box start */}
      <div className=" relative min-h-[469px]   ">
        <img
          className="absolute -z-20   top-0 left-0 w-full h-full object-cover "
          src="https://i.ibb.co.com/XfW9HLSD/cta-bg-4.jpg"
          alt=""
        />
        <img
          className="absolute right-0 bottom-0"
          src="https://i.ibb.co.com/k2FJkZbv/right-doctor-image.png"
          alt=""
        />
        <div className="w-10/12 h-[469px] mx-auto  flex items-center    ">
          <div className="w-[55%] space-y-6">
            <h1 className="font-Outfit leading-[50px] text-white text-[48px] font-[600]">
              We’re welcoming new patients and can’t wait to meet you!
            </h1>
            <p className="text-[16px] text-white font-[400] w-10/12">
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health,
              and any specific goals or values. Specify the types of medical
              services provided
            </p>
            <div className="flex gap-5">
              <button className="bg-gradient-to-b from-[#4FE4A4] to-[#B4E8C9] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out">
                BOOK APPOINTMENT
              </button>
              <button className="bg-gradient-to-b from-[#E8ECF3] to-[#FFFFFF] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out">
                GET FREE CONSULTING
              </button>
            </div>
          </div>
          <div className="w-[45%]"></div>
        </div>
      </div>
      {/* box end */}
    </div>
  );
};

export default BookAnAppoinment;
