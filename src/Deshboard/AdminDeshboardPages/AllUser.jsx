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
      axios("http://localhost:5000/getalluser").then((res) => {
        return res?.data;
      }),
  });
  console.log("alhamdulillah getall user is", getalluser);
  const closeModals = () => {
    setIsOpens(false);
  };

  const handleBlockUser = (id) => {
    console.log("alhamdulillah id is", id);
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
        axios.put(`http://localhost:5000/blockuser/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Blocked!",
              text: "The user has been blocked.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleunBlockUser = (id) => {
    console.log("alhamdulillah id is", id);
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
        axios.put(`http://localhost:5000/unBlockuser/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Unblocked!",
              text: "The user has been unblocked.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDownloadUserDetails = async (userId) => {
    try {
      const userDetails = await axios.get(`http://localhost:5000/userdetails/${userId}`);
      console.log("alhamdulillah user details is", userDetails);
      const user = userDetails.data;
  
      const testDetailsResponse = await axios.get(`http://localhost:5000/testdetails/${user?.email}`);
      console.log("alhamdulillah test details is", testDetailsResponse);
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
          doc.text(`Test ${index + 1}: ${test?.testname || 'N/A'}`, 10, yPos);
          yPos += 10;
          doc.text(`Test ${index + 1} Delivery Status: ${test.reportStatus || 'N/A'}`, 10, yPos);
          yPos += 10;
        });
      } else {
        doc.text('No tests found for this user.', 10, yPos);
      }
  
      doc.save(`user_${user.name || "unknown"}_details.pdf`);
    } catch (error) {
      console.error("Error fetching user details:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to fetch user details. Please try again later.",
        icon: "error",
      });
    }
  };



  const handleMakeAdmin = async(ids) =>{
 
  const  res = await axios.patch(`http://localhost:5000/makeadmin/${ids}`)
  console.log('alhamdulillah make admin res is', res);
  if(res.data.modifiedCount > 0){
    refetch();
    toast.success('make admin sucessfully')
  }
 
 
  };


  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Status</th>
              <th>Block User</th>
              <th>View All Info</th>
              <th>Download Details</th>
            </tr>
          </thead>
          <tbody>
            {getalluser.map((usergetall, idx) => (
              <tr key={usergetall?._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={usergetall?.image} alt="User Avatar" />
                    </div>
                  </div>
                </td>
                <td>{usergetall?.name}</td>
                <td>{usergetall?.email}</td>
                <td>{usergetall?.userStatus}</td>
                <td>
                  {usergetall.userStatus === "active" ? (
                    <button
                      onClick={() => handleBlockUser(usergetall?._id)}
                      className="bg-red-500 text-white rounded-lg p-2"
                    >
                      Block User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleunBlockUser(usergetall?._id)}
                      className="bg-green-500 text-white rounded-lg p-2"
                    >
                      Unblock User
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => setIsOpens(true)}
                    className="font-Outfit px-3 py-2 bg-gray-200"
                  >
                    See Info
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
                    className="bg-blue-500 text-white rounded-lg p-2"
                  >
                    Download Details
                  </button>
                </td>
                    <td className="">
                        {
                         'role' in usergetall == true ? <p>Admin</p>   :              <button onClick={()=>handleMakeAdmin(usergetall?._id)} className="px-3 py-2  rounded-lg  bg-gray-200">Make Admin</button>
                        }
            
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
