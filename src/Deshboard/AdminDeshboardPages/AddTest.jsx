import axios from "axios";
// import { useState } from "react";
import { toast } from "react-toastify";

const AddTest = () => {
  // const [selectedDate, setSelectedDate] = useState("");
  // const currentDate = new Date().toISOString().split("T")[0];
  // console.log("alhamdulillah selected date is", selectedDate);
  const handleAddTestBtn = (e) => {
    e.preventDefault();
    console.log(
      "alhamdulilah add test button is now working mashallh this is veru importent"
    );

    const form = e.target;
    const testname = form.testname.value;
    const testdetails = form.testdetails.value;
    const testprice = form.testprice.value;
    const bannerimg = form.bannerimg.value;
    const slotsnumber = form.slotsnumber.value;
    const date = form.date.value;

    const fullIsoDate = new Date(date).toISOString();
    console.log("alhamdulillah full date formate is", fullIsoDate);
    console.log("date is", date);
    const addTestData = {
      testname,
      testdetails,
      testprice,
      bannerimg,
      slotsnumber,
      date: fullIsoDate,
    };

    console.log("alhamdulillah add test data is ", addTestData);

    axios
      .post("http://localhost:5000/posttestdata", addTestData)
      .then((res) => {
        console.log("alhamdulillah", res);
        if (res.status == 200) {
          toast.success("sucessfully added data");
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-9/12 ">
        <div>
          <p className="font-DM font-[600] text-[30px] text-center">
            Add Test Data
          </p>
          <div className="border-2 p-5 ">
            <form onSubmit={handleAddTestBtn}>
              <div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Test Name
                  </label>
                  <input
                    name="testname"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Test Details
                  </label>
                  <input
                    name="testdetails"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Test Price
                  </label>
                  <input
                    name="testprice"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Banner Image
                  </label>
                  <input
                    name="bannerimg"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Slots Number
                  </label>
                  <input
                    name="slotsnumber"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Select Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                    required
                  />
                </div>
              </div>
              <button className="bg-gradient-to-b my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                Add Test
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTest;
