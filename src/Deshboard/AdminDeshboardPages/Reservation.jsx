import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Reservation = () => {
  const [finalReservationValue, setFinalReservationValue] = useState([]);
  const [emailValues, setEmailValues] = useState(null);

  const { data: getreserve = [], refetch } = useQuery({
    queryKey: ["getreserve"],
    queryFn: () => axios.get("http://localhost:5000/getreserve").then(res => res.data),
  });

  const { data: emailSearchValue = [] } = useQuery({
    queryKey: ["emailSearchValue", emailValues],
    enabled: !!emailValues,
    queryFn: () => axios.get(`http://localhost:5000/searchbyemail/${emailValues}`).then(res => res.data),
  });

  useEffect(() => {
    if (emailValues && emailSearchValue.length > 0) setFinalReservationValue(emailSearchValue);
    else if (!emailValues) setFinalReservationValue(getreserve);
  }, [getreserve, emailSearchValue, emailValues]);

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/deletereseve/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success" });
            setEmailValues(null);
          }
        }).catch(() => {
          Swal.fire({ title: "Error!", text: "Failed to delete.", icon: "error" });
        });
      }
    });
  };

  const handleEmailSearch = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value.trim();
    setEmailValues(emailValue || null);
  };

  return (
    <div className="overflow-x-auto p-4">
      <form onSubmit={handleEmailSearch}>
        <div className="flex gap-3 items-center my-7">
          <label htmlFor="email">Search By Email</label>
          <input id="email" name="email" type="email" placeholder="Enter email" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input className="btn btn-info text-white cursor-pointer px-4 py-2 rounded" type="submit" value="Search" />
        </div>
      </form>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2"></th>
            <th className="border border-gray-300 p-2">  Image</th>
            <th className="border border-gray-300 p-2">  Name</th>
            <th className="border border-gray-300 p-2">  Email</th>
            <th className="border border-gray-300 p-2">Reserve Test</th>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">  Status</th>
            <th className="border border-gray-300 p-2">Submit  </th>
            <th className="border border-gray-300 p-2">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {finalReservationValue.length === 0 ? (
            <tr><td colSpan={9} className="text-center p-4">No reservations found.</td></tr>
          ) : (
            finalReservationValue.map((reserveget, idx) => (
              <tr key={reserveget?._id} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{idx + 1}</td>
                <td className="border border-gray-300 p-2">
                  <div className="avatar mx-auto">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img src={reserveget?.userPhoto || "https://via.placeholder.com/64"} alt={reserveget?.userName || "User"} className="object-cover w-full h-full" />
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">{reserveget?.userName}</td>
                <td className="border border-gray-300 p-2">{reserveget?.userEmail}</td>
                <td className="border border-gray-300 p-2">{reserveget?.testname}</td>
                <td className="border border-gray-300 p-2">{reserveget?.transictionId}</td>
                <td className="border border-gray-300 p-2">{reserveget?.reportStatus}</td>
                <td className="border border-gray-300 p-2">
                  {reserveget?.reportStatus === "Pending" ? (
                    <Link to={`updatetestresult/${reserveget?._id}`}>
                      <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-3 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">Submit</button>
                    </Link>
                  ) : (
                    <p>Submitted</p>
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleDeleteBtn(reserveget?._id)} className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-3 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">Cancel</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
