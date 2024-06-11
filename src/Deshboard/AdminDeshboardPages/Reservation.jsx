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
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getreserve").then(
        (res) => res.data
      ),
  });

  useEffect(() => {
    if (!emailValues) {
      setFinalReservationValue(getreserve);
    }
  }, [getreserve, emailValues]);

  // console.log("alhamdulillah reserve data is", getreserve);

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
        // console.log(id);
        axios
          .delete(`https://my-ass-12-server.vercel.app/deletereseve/${id}`)
          .then((res) => {
            // console.log("alhamdulillah response is", res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleEmailSearch = async (e) => {
    e.preventDefault();
    // console.log("alhamdulillah this is hitting");
    const emailValue = e.target.email.value;
    setEmailValues(emailValue);
  };

  // console.log("alhamdulillah email value is", emailValues);

  const { data: emailSearchValue = [] } = useQuery({
    queryKey: ["emailSearchValue", emailValues],
    enabled: !!emailValues,
    queryFn: () =>
      axios(
        `https://my-ass-12-server.vercel.app/searchbyemail/${emailValues}`
      ).then((res) => res.data),
  });

  useEffect(() => {
    if (emailSearchValue.length > 0) {
      setFinalReservationValue(emailSearchValue);
    }
  }, [emailSearchValue]);

  return (
    <div>
      <div className="overflow-x-auto">
        <form onSubmit={handleEmailSearch}>
          <div className="flex gap-3 items-center my-7">
            <label>Search By Email</label>
            <input name="email" type="email" className="px-3 py-2 rounded-lg" />
            <input
              className="btn btn-info text-white"
              type="submit"
              value="Search"
            />
          </div>
        </form>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Reserve test Name</th>
              <th>Transaction Id</th>
              <th>Report Status</th>
              <th>Submit Test Result</th>
              <th>Cancel Reservation</th>
            </tr>
          </thead>
          <tbody>
            {finalReservationValue.map((reserveget, idx) => (
              <tr key={reserveget?._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={reserveget?.userPhoto} />
                    </div>
                  </div>
                </td>
                <td>{reserveget?.userName}</td>
                <td>{reserveget?.userEmail}</td>
                <td>{reserveget?.testname}</td>
                <td>{reserveget?.transictionId}</td>
                <td>{reserveget?.reportStatus}</td>
                <td>
                  {reserveget?.reportStatus === "Pending" ? (
                    <Link to={`updatetestresult/${reserveget?._id}`}>
                      <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        Submit test result
                      </button>
                    </Link>
                  ) : (
                    <p>Submitted</p>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBtn(reserveget?._id)}
                    className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
