import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import UserDetailsModal from "../../Component/Modal/UserDetailsModal";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const AllUser = () => {
  const [isOpens, setIsOpens] = useState(false);
  const { data: getalluser = [], refetch } = useQuery({
    queryKey: ["getalluser"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getalluser").then(
        (res) => res?.data
      ),
  });

  const closeModals = () => setIsOpens(false);

  const handleBlockUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Block User!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`https://my-ass-12-server.vercel.app/blockuser/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Blocked!", "The user has been blocked.", "success");
            }
          });
      }
    });
  };

  const handleunBlockUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unblock User!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`https://my-ass-12-server.vercel.app/unBlockuser/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "Unblocked!",
                "The user has been unblocked.",
                "success"
              );
            }
          });
      }
    });
  };

  const handleDownloadUserDetails = async (userId) => {
    try {
      const userDetails = await axios.get(
        `https://my-ass-12-server.vercel.app/userdetails/${userId}`
      );
      const user = userDetails.data;
      const testDetailsResponse = await axios.get(
        `https://my-ass-12-server.vercel.app/testdetails/${user?.email}`
      );
      const testDetails = testDetailsResponse.data;

      const doc = new jsPDF();
      let yPos = 10;
      doc.text(`User's Name: ${user.name || "N/A"}`, 10, yPos);
      yPos += 10;
      doc.text(`User's Email: ${user.email || "N/A"}`, 10, yPos);
      yPos += 10;
      doc.text(`User's Status: ${user.userStatus || "N/A"}`, 10, yPos);
      yPos += 10;

      if (Array.isArray(testDetails) && testDetails.length > 0) {
        testDetails.forEach((test, index) => {
          doc.text(`Test ${index + 1}: ${test?.testname || "N/A"}`, 10, yPos);
          yPos += 10;
          doc.text(
            `Test ${index + 1} Delivery Status: ${test.reportStatus || "N/A"}`,
            10,
            yPos
          );
          yPos += 10;
        });
      } else {
        doc.text("No tests found for this user.", 10, yPos);
      }

      doc.save(`user_${user.name || "unknown"}_details.pdf`);
    } catch (error) {
      Swal.fire(
        "Error",
        "Failed to fetch user details. Please try again later.",
        "error"
      );
    }
  };

  const handleMakeAdmin = async (ids) => {
    const res = await axios.patch(
      `https://my-ass-12-server.vercel.app/makeadmin/${ids}`
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Made admin successfully");
    }
  };

  return (
    <div className="overflow-x-auto px-4 py-6">
      <div className="min-w-full rounded-lg overflow-hidden">
        <table className="table w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
              <th>Details</th>
              <th>Download</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {getalluser.map((usergetall, idx) => (
              <tr key={usergetall?._id} className="text-center">
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar mx-auto">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={usergetall?.image}
                        alt="User Avatar"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-black">{usergetall?.name}</td>
                <td className="text-black">{usergetall?.email}</td>
                <td className="text-black">{usergetall?.userStatus}</td>
                <td>
                  {usergetall.userStatus === "active" ? (
                    <button
                      onClick={() => handleBlockUser(usergetall?._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleunBlockUser(usergetall?._id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-md"
                    >
                      Unblock
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => setIsOpens(true)}
                    className="bg-gray-200 hover:bg-gray-300 text-black font-semibold px-3 py-1 rounded-md"
                  >
                    Info
                  </button>
                  <UserDetailsModal
                    isOpens={isOpens}
                    closeModals={closeModals}
                    userId={usergetall?._id}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDownloadUserDetails(usergetall?._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded-md"
                  >
                    Download
                  </button>
                </td>
                <td className="whitespace-nowrap min-w-[130px]">
                  {"role" in usergetall ? (
                    <span className="text-green-600 font-bold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(usergetall?._id)}
                      className="bg-gray-300 hover:bg-gray-400 text-black font-medium text-sm px-3 py-1 rounded-md"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
