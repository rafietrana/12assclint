import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
// import date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const AllTestPage = () => {
  const [startDate, setStartDate] = useState("");
  console.log("alahmdulillah start date is", startDate);

  const { data: getTestPage = [] } = useQuery({
    queryKey: ["getTestPage"],
    queryFn: () =>
      axios("http://localhost:5000/gettestall").then((res) => {
        return res.data;
      }),
  });

  const { data: getQueryDate = [], refetch } = useQuery({
    queryKey: ["getQueryDate"],
    queryFn: () =>
      axios(`http://localhost:5000/datequery?date=${startDate}`).then(
        (res) => {
          console.log('alhamdulillah response is', res);
          return res.data;
   
        }
      ),
  });

  console.log("alhamdulillah get query date is", getQueryDate);

  const handleSatDateBtn = (date) => {
 
    const toIsoDate = new Date(date).toISOString();
    setStartDate(toIsoDate);
    refetch();
  };

  return (
    <div className="w-10/12 mx-auto my-11 ">
      <div className="   space-y-2">
        <div className="  w-full my-5 mb-7 font-Outfit flex gap-7 items-center">
          {" "}
          <span>Search By Date </span>{" "}
          <span>
            {" "}
            <DatePicker
              name="date"
              className="outline-none border "
              selected={startDate ? new Date(startDate).toISOString() : null}
              onChange={(date) => handleSatDateBtn(date)}
              dateFormat="yyyy-MM-dd"
            />
          </span>{" "}
        </div>
      </div>
      <div className="   mx-auto grid lg:grid-cols-4 gap-6  md:grid-cols-2 grid-cols-1">
        {getTestPage.map((pageTestGet) => (
          <div
            key={pageTestGet._id}
            className="card card-compact w-70 bg-base-100 border"
          >
            <figure>
              <div className="avatar p-5">
                <div className="w-24 rounded border-4">
                  <img src={pageTestGet.bannerimg} />
                </div>
              </div>
            </figure>
            <div className="card-body ">
              <h2 className="font-Outfit text-xl font-medium text-center">
                {pageTestGet?.testname}
              </h2>
              <p className="text-center">{pageTestGet.date.split("T")[0]}</p>
              <p className="text-center">
                <span className="font-Outfit">Slots Number: </span>{" "}
                {pageTestGet.slotsnumber}
              </p>
              <p className="text-center">
                {pageTestGet.testdetails.slice(0, 50)}...
              </p>
              <div className="text-center">
                <Link to={`/testdetails/${pageTestGet._id}`}>
                  <button className="bg-gradient-to-b from-gray-100 to-gray-200   text-black font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                    View Details
                  </button>
                </Link>
              </div>
              <div className="card-actions   "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTestPage;
