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
      <div className="w-11/12 mx-auto my-11">
        {/* Filter & Print Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <label className="font-Outfit">Search By Local Date</label>
            <DatePicker
              name="date"
              className="outline-none border px-2 py-1 rounded"
              selected={startDate ? new Date(startDate) : null}
              onChange={(date) => handleSatDateBtn(date)}
              placeholderText="Select Date"
            />
          </div>

          <div className="flex justify-end w-full md:w-auto">
            <ReactToPrint
              trigger={() => (
                <button className="  text-black py-2 px-4   shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
                  Print All Tests
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>

        {/* Table View */}
        <div ref={componentRef} className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full table-auto text-sm text-center">
            <thead className="bg-gray-100 text-gray-700 font-medium">
              <tr>
                <th className="px-4 py-2 border">Banner</th>
                <th className="px-4 py-2 border">Test Name</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Slots</th>
                <th className="px-4 py-2 border">Local Date</th>
                <th className="px-4 py-2 border">Details</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {finalFilterDate.map((test) => (
                <tr key={test._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-2 border">
                    <img src={test.bannerimg} alt="Banner" className="h-16 mx-auto rounded" />
                  </td>
                  <td className="px-4 py-2 border">{test.testname}</td>
                  <td className="px-4 py-2 border">{test.date.split("T")[0]}</td>
                  <td className="px-4 py-2 border">{test.slotsnumber}</td>
                  <td className="px-4 py-2 border">{test.localDate}</td>
                  <td className="px-4 py-2 border">
                    {test.testdetails.slice(0, 50)}...
                  </td>
                  <td className="px-4 py-2 border">
                    <Link to={`/testdetails/${test._id}`}>
                      <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="my-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={handlePrevBtn}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-green-500 text-white"
                  : "bg-gray-50 hover:bg-gray-200"
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNextBtn}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllTestPage;
