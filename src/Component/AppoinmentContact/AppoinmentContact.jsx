const AppoinmentContact = () => {
  return (
    <div className="w-11/12 mx-auto py-20 px-5">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left Side - Working Hours */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center relative md:items-end items-center">
          <div className="absolute hidden md:block w-[80%] h-full rounded-xl border border-black z-0 left-0 top-0"></div>
          <div className="bg-[#1F5FFF] z-10 h-[80%] w-[80%] rounded-xl text-white p-8">
            <h1 className="font-Outfit text-2xl font-semibold">Working Hours</h1>
            <p className="text-sm mt-2">
              Variations of passages are available, anything embarrassing.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { day: "Monday - Tuesday", time: "9am - 6pm" },
                { day: "Wednesday - Thursday", time: "8am - 5pm" },
                { day: "Friday", time: "7am - 10pm" },
                { day: "Saturday", time: "10am - 7pm" },
                { day: "Sunday", time: "Closed" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b border-white pb-2">
                  <p>{item.day}:</p>
                  <p>{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div className="lg:w-2/3 w-full px-7 py-12 shadow-lg rounded-xl bg-white">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="space-y-4 w-full md:w-[50%] flex flex-col items-center">
              <img className="rounded-lg h-[50%] object-cover w-full md:w-[280px] lg:w-[300px]" src="https://i.ibb.co/yn7VWWmj/form-1-1.jpg" alt="form-1" />
              <img className="rounded-lg h-[50%] object-cover w-full md:w-[280px] lg:w-[300px]" src="https://i.ibb.co/8nB70xkc/form-1-2.jpg" alt="form-2" />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-[60%]">
              <h1 className="text-2xl font-semibold font-Outfit text-gray-800">Book An Appointment</h1>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <input className="bg-gray-100 w-full px-4 py-3 rounded-xl" type="text" placeholder="Your Name" />
                <input className="bg-gray-100 w-full px-4 py-3 rounded-xl" type="email" placeholder="Email Address" />
                <input className="bg-gray-100 w-full px-4 py-3 rounded-xl" type="number" placeholder="Phone Number" />

                {/* Dropdown for Inquiry Type */}
                <select className="bg-gray-100 w-full px-4 py-3 rounded-xl">
                  <option value="">Select Inquiry Type</option>
                  <option value="general">General Inquiry</option>
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-Up</option>
                </select>

                {/* Date & Time Selection */}
                <input className="bg-gray-100 w-full px-4 py-3 rounded-xl" type="date" />
                <input className="bg-gray-100 w-full px-4 py-3 rounded-xl" type="time" />
              </div>

              {/* Submit Button */}
              <button className="mt-6 w-full bg-[#1F5FFF] text-white font-semibold py-3 rounded-xl hover:bg-[#164BCC] transition">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentContact;
