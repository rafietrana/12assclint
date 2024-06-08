import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AllTestPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [finalFilterDate, setFinalFilterDate] = useState([]);
  console.log("alhamdulillah start date is", startDate);

  const { data: getTestPage = [] } = useQuery({
    queryKey: ["getTestPage"],
    queryFn: () =>
      axios("http://localhost:5000/gettestall").then((res) => {
        return res.data;
      }),
  });

  const { data: getQueryDate = []  } = useQuery({
    queryKey: ["getQueryDate", startDate],
    queryFn: () =>
      axios.get("http://localhost:5000/datequery", {
        params: { date: startDate },
      }).then((res) => {
        return res.data;
      }),
    enabled: !!startDate,  
  });

  useEffect(() => {
    if (startDate) {
      const filterDate = getQueryDate.filter((dateFilter) => {
        return dateFilter.localDate === startDate;
      });
      console.log("alhamdulillah filter date is", filterDate);
      setFinalFilterDate(filterDate);
    } else {
      setFinalFilterDate(getTestPage);
    }
  }, [startDate, getQueryDate, getTestPage]);

  const handleSatDateBtn = (date) => {
    const toLocalDate = new Date(date).toLocaleDateString();
    setStartDate(toLocalDate);
  };

  return (
    <div className="w-10/12 mx-auto my-11">
      <div className="space-y-2">
        <div className="w-full my-5 mb-7 font-Outfit flex gap-7 items-center">
          <span>Search By Local Date</span>
          <span>
            <DatePicker
              name="date"
              className="outline-none border"
              selected={startDate ? new Date(startDate) : null}
              onChange={(date) => handleSatDateBtn(date)}
            />
          </span>
        </div>
      </div>
      <div className="mx-auto grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {finalFilterDate.map((pageTestGet) => (
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
            <div className="card-body">
              <h2 className="font-Outfit text-xl font-medium text-center">
                {pageTestGet?.testname}
              </h2>
              <p className="text-center">{pageTestGet.date.split("T")[0]}</p>
              <p className="text-center">
                <span className="font-Outfit">Slots Number: </span>
                {pageTestGet.slotsnumber}
              </p>
              <p className="text-center">
                <span className="font-Outfit">Local Search Date: </span>
                {pageTestGet?.localDate}
              </p>
              <p className="text-center">
                {pageTestGet.testdetails.slice(0, 50)}...
              </p>
              <div className="text-center">
                <Link to={`/testdetails/${pageTestGet._id}`}>
                  <button className="bg-gradient-to-b from-gray-100 to-gray-200 text-black font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    View Details
                  </button>
                </Link>
              </div>
              <div className="card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTestPage;
