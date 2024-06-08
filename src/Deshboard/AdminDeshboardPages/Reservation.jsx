import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const Reservation = () => {
  const { data: getreserve = [], refetch } = useQuery({
    queryKey: ["getreserve"],
    queryFn: () =>
      axios("http://localhost:5000/getreserve").then((res) => {
        return res.data;
      }),
  });

  console.log("alhamdulillah reserve data is", getreserve);

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
        console.log(id);
        axios.delete(`http://localhost:5000/deletereseve/${id}`).then((res) => {
          console.log("alhamdulillah response is", res.data);
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
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Transction Id</th>
              <th>Report Status</th>
              <th>Submit Test Result</th>
              <th>Cancal Reservation</th>
            </tr>
          </thead>
          <tbody>
            {getreserve.map((reserveget, idx) => (
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

                <td>{reserveget?.transictionId}</td>
                <td>{reserveget?.reportStatus}</td>
                <td>
                  {
                    reserveget?.reportStatus == "Pending" ?                 <Link to={`/deshboard/reservation/updatetestresult/${reserveget?._id}`}>
                    <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                        submit test result
                      </button>
                    </Link>  : <p>Submited</p>
                  }


                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteBtn(reserveget?._id)}
                    className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Cancal
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
