import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
 
import Swal from "sweetalert2";

const AllTest = () => {
  const { data: alltestdata = [], refetch } = useQuery({
    queryKey: ["alltest"],
    queryFn: () =>
      axios("http://localhost:5000/getalltest").then((res) => {
        return res.data;
      }),
  });
  console.log("alhamdulillah all data is ", alltestdata);

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
          console.log(res.data);
          if (res.data.deletedCount > 0) {
 
            refetch()
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
              <th>Test Image</th>
              <th>Test Name</th>
              <th>Test Price</th>
              <th>Slots Number</th>
              <th>Update</th>
              <th>Deletet</th>
            </tr>
          </thead>
          <tbody>
            {alltestdata.map((dataAllTest, idx) => (
              <tr key={dataAllTest._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={dataAllTest.bannerimg} />
                    </div>
                  </div>
                </td>
                <td>{dataAllTest?.testname}</td>
                <td>{dataAllTest?.testprice}</td>
                <td>{dataAllTest?.slotsnumber}</td>
                <td>
                  {" "}
                  <Link to={`/deshboard/testupdate/${dataAllTest._id}`}>
                    <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteTestBtn(dataAllTest._id)}
                    className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Delete
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

export default AllTest;
