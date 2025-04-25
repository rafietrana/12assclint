import { useRef, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ReactToPrint from "react-to-print";
import Footer from "../../Shyerd/Footer/Footer";
import useAxiosSecuree from "../../Hooks/useAxiosSecuree";
import useAuth from "../../Hooks/useAuth";

const AllTestPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [finalFilterDate, setFinalFilterDate] = useState([]);
  const componentRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const { user } = useAuth();
  const itemPerPages = 4;
  const numberOfPages = Math.ceil(count / itemPerPages);
  const axiosSecure = useAxiosSecuree();

  const pages = [...Array(numberOfPages).keys()];

  const handleNextBtn = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const { data: getTestPage = [] } = useQuery({
    queryKey: ["getTestPage", currentPage],
    queryFn: () =>
      axiosSecure(
        `http://localhost:5000/gettestall?page=${currentPage}&size=${itemPerPages}&email=${user?.email}`
      ).then((res) => res.data.tests),
  });

  const { data: getQueryDate = [] } = useQuery({
    queryKey: ["getQueryDate", startDate],
    queryFn: () =>
      axios
        .get("http://localhost:5000/datequery", {
          params: { date: startDate },
        })
        .then((res) => res.data),
    enabled: !!startDate,
  });

  useEffect(() => {
    if (startDate) {
      const filterDate = getQueryDate.filter((dateFilter) => {
        return dateFilter.localDate === startDate;
      });
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
    <>
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
        <ReactToPrint
          trigger={() => (
            <button className="bg-gradient-to-b from-gray-100 to-gray-200 text-black py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5">
              Print All Tests
            </button>
          )}
          content={() => componentRef.current}
        />
        <div
          ref={componentRef}
          className="mx-auto grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1"
        >
          {finalFilterDate.map((pageTestGet) => (
            <div
              key={pageTestGet._id}
              className="card card-compact w-70 border shadow-lg bg-gray-50"
            >
              <figure>
                <div className="avatar p-5">
                  <div className="h-[200px]">
                    <img src={pageTestGet.bannerimg} alt="Test Banner" />
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
        <div className="my-8 flex justify-center items-center">
          <button onClick={handlePrevBtn} className="px-2 py-1 bg-gray-100">
            Prev
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`bg-gray-50 mx-1 p-4 rounded-md ${
                currentPage === page && "bg-green-500 text-white"
              }`}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextBtn} className="px-2 py-1 bg-gray-100">
            Next
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllTestPage;
