import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTest = () => {
  const { data: alltestdata = [], refetch } = useQuery({
    queryKey: ["alltest"],
    queryFn: () =>
      axios.get("http://localhost:5000/getalltest").then((res) => res.data),
  });

  const handleDeleteTestBtn = (id) => {
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
        axios.delete(`http://localhost:5000/deletetest/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Test has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="table w-full text-center shadow-md">
        <thead className="bg-gray-200 text-gray-700 font-semibold">
          <tr>
            <th>#</th>
            <th>Test Image</th>
            <th>Test Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Slots</th>
            <th>Reservation</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {alltestdata.map((data, idx) => (
            <tr key={data._id} className="hover:bg-gray-100">
              <td>{idx + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-16 rounded">
                    <img src={data.bannerimg} alt="Test" />
                  </div>
                </div>
              </td>
              <td>{data.testname}</td>
              <td>${data.testprice}</td>
              <td>{data.date?.split("T")[0]}</td>
              <td>{data.slotsnumber}</td>
              <td>
                <Link to={`/deshboard/singlereservation/${data._id}`}>
                  <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    View Now
                  </button>
                </Link>
              </td>
              <td>
                <Link to={`/deshboard/testupdate/${data._id}`}>
                  <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteTestBtn(data._id)}
                  className="bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTest;
