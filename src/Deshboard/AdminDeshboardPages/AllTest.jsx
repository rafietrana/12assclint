import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllTest = () => {
  const { data: alltestdata = [] } = useQuery({
    queryKey: ["alltest"],
    queryFn: () =>
      axios("http://localhost:5000/getalltest").then((res) => {
        return res.data;
      }),
  });
  console.log("alhamdulillah all data is ", alltestdata);
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
                  <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                    Update
                  </button>
                </td>
                <td>
                <button
 
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
