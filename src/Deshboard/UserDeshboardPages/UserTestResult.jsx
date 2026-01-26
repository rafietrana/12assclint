import axios from "axios";
import useAuth from "./../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const UserTestResult = () => {
  const { user } = useAuth();
  const componentRef = useRef();

  const { data: userTestResult = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios(
        `https://my-ass-12-server.vercel.app/getusertestresult/${user?.email}`
      ).then((res) => {
        return res.data;
      }),
  });
  // // $&
  return (
    <div>
      <div>
        <ReactToPrint
          trigger={() => (
            <button className="bg-gradient-to-b text-black from-gray-100 to-gray-200 text-black py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5">
              Download Result
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="overflow-x-auto">
        <table ref={componentRef} className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-black">Test Name</th>
              <th className="text-black">Test Date</th>
              <th className="text-black">Status</th>
              <th className="text-black">Result</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userTestResult.map((resutlTestUser, idx) => (
              <tr key={resutlTestUser?._id}>
                <th>{idx + 1}</th>
                <td>{resutlTestUser?.testname}</td>
                <td>{resutlTestUser?.bookingDate}</td>
                <td>{resutlTestUser?.reportStatus}</td>
                <td>
                  {resutlTestUser?.testResult ? (
                    resutlTestUser?.testResult
                  ) : (
                    <p>not Provide</p>
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

export default UserTestResult;
