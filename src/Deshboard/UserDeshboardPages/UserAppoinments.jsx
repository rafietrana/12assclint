import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const UserAppoinments = () => {
  const { user } = useAuth();
  // // $&

  const { data: getReserveUser = [], refetch } = useQuery({
    queryKey: ["getReserveUser"],
    queryFn: () =>
      axios(
        `https://my-ass-12-server.vercel.app/getuserreserve/${user?.email}`
      ).then((res) => {
        return res.data;
      }),
  });
  // // $&

  const userAppoinmentDeleteBtn = (id) => {
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
        // // $&

        axios
          .delete(
            `https://my-ass-12-server.vercel.app/deleteuserappoinment/${id}`
          )
          .then((res) => {
            // // $&
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
              <th className="text-black">Test Name</th>
              <th className="text-black">Appoinment Data</th>
              <th className="text-black">Appoinment Time</th>
              <th className="text-black">Cancal Appoinment</th>
            </tr>
          </thead>
          <tbody>
            {getReserveUser.map((userReserveGet, idx) => (
              <tr key={userReserveGet?._id}>
                <th className="text-black">{idx + 1}</th>
                <td className="text-black">{userReserveGet?.testname}</td>
                <td className="text-black">{userReserveGet?.bookingDate.split("T")[0]}</td>
                <td className="text-black">{userReserveGet?.bookingTime}</td>

                <td>
                  <button
                    onClick={() => userAppoinmentDeleteBtn(userReserveGet._id)}
                    className="px-3 py-2 text-black bg-gray-300 rounded-lg"
                  >
                    Cancal Appoinment{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAppoinments;
