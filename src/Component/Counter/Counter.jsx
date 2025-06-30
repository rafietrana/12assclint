import CountUp from "react-countup";

const Counter = () => {
  const counterData = [
    {
      number: 67,
      description: "Satisfied Patients",
    },
    {
      number: 23,
      description: "Professional Doctors",
    },
    {
      number: 19,
      description: "Operations Successful",
    },
    {
      number: 13,
      description: "National Awards Win",
    },
  ];

  // $&

  return (
    <div className=" py-20 bg-white">
      <div className="w-9/12 mx-auto bg-[#000D44] min-h-[250px] rounded-2xl flex items-center">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 my-20 md:my-0  md:grid-cols-2  lg:gap-3 gap-10 ">
            {counterData.map((dataCounter, idx) => (
              <div key={idx} className=" text-center ">
                <div className="">
                  <h1 className="text-[#04CE78] text-4xl lg:text-[64px]  font-[600] ">
                    <CountUp
                      end={dataCounter.number}
                      delay={1000}
                      enableScrollSpy
                    />
                    <span className="text-white">+</span>{" "}
                  </h1>
                  <p className="text-white lg:mt-5">
                    {dataCounter?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
