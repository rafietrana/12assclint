import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleReservation = () => {
    const {testid} = useParams();
    console.log('alhamdulillah test id is', testid);




    const {   data:getsinglereserve=[] } = useQuery({
        queryKey: ['getsinglereserve'],
        queryFn: () =>
          axios(`http://localhost:5000/singlereserve/${testid}`)
        .then(res =>{
            return res?.data
        })
      })


      console.log('alhamdulillah single reserve data is', getsinglereserve);
  return (
    <div>
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
            {getsinglereserve.map((reserveget, idx) => (
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
  );
};

export default SingleReservation;
