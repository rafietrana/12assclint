import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { FaPlusCircle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const AddTest = () => {
  const [startDate, setStartDate] = useState(null);

  const handleAddTestBtn = (e) => {
    e.preventDefault();

    const form = e.target;
    const testname = form.testname.value;
    const testdetails = form.testdetails.value;
    const testprice = form.testprice.value;
    const bannerimg = form.bannerimg.value;
    const slotsnumber = form.slotsnumber.value;

    if (!startDate) {
      toast.error("Please select a date.");
      return;
    }

    const fullIsoDate = new Date(startDate).toISOString();
    const localDate = new Date(startDate).toLocaleDateString();

    const addTestData = {
      testname,
      testdetails,
      testprice,
      bannerimg,
      slotsnumber: parseInt(slotsnumber),
      date: fullIsoDate,
      localDate,
      count: 0,
    };

    axios
      .post("http://localhost:5000/posttestdata", addTestData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully added test!");
          form.reset();
          setStartDate(null);
        }
      })
      .catch(() => {
        toast.error("Failed to add test. Try again.");
      });
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white border rounded-xl p-6 md:p-10">
        <form onSubmit={handleAddTestBtn}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Test Name */}
            <div>
              <label className="block text-gray-700 mb-2">Test Name</label>
              <input
                name="testname"
                type="text"
                placeholder="Enter test name"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Test Price */}
            <div>
              <label className="block text-gray-700 mb-2">Test Price</label>
              <input
                name="testprice"
                type="number"
                placeholder="Enter price (e.g., 500)"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Banner Image */}
            <div>
              <label className="block text-gray-700 mb-2">Banner Image URL</label>
              <input
                name="bannerimg"
                type="text"
                placeholder="Enter image URL"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Slots Number */}
            <div>
              <label className="block text-gray-700 mb-2">Number of Slots</label>
              <input
                name="slotsnumber"
                type="number"
                placeholder="Enter total slots"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-gray-700 mb-2">Select Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
                placeholderText="Select date"
                required
              />
            </div>

            {/* Test Details */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Test Details</label>
              <textarea
                name="testdetails"
                placeholder="Enter test details"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
                rows="4"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold text-lg py-3 rounded-full transition-all duration-300"
          >
            <FaPlusCircle className="text-xl" />
            Add Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
