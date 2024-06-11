import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const FeturedTest = () => {
  const { data: getsortfeturedtest = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios("http://localhost:5000/getsortfeturedid").then((res) => {
        return res.data;
      }),
  });
  return (
    <div>
      <div className="w-9/12 mx-auto my-10">
        <div className="mb-16">
          <p className="text-center font-Outfit text-2xl">Alll Fetured Test</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
          {getsortfeturedtest.map((pageTestGet) => (
            <div
              key={pageTestGet._id}
              className="card card-compact w-70  border shadow-lg bg-gray-50"
            >
              <figure>
                <div className="avatar p-5">
                  <div className="h-[200px]">
                    <img src={pageTestGet.bannerimg} />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="font-Outfit text-xl font-medium text-center">
                  {pageTestGet?.testname}
                </h2>
                <p className="text-center">
                  {pageTestGet.date && pageTestGet.date.split("T")[0]}
                </p>
                <p className="text-center">
                  <span className="font-Outfit">Slots Number: </span>
                  {pageTestGet.slotsnumber}
                </p>
                <p className="text-center">
                  <span className="font-Outfit">Totall Booking : </span>
                  {pageTestGet?.count}
                </p>
                <p className="text-center">
                  {pageTestGet?.testdetails &&
                    pageTestGet?.testdetails.slice(0, 50)}
                  ...
                </p>
                <div className="text-center">
                  <Link to={`/testdetails/${pageTestGet._id}`}>
                    <button className="bg-gradient-to-b from-gray-100 to-gray-200 text-black font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                      View Details
                    </button>
                  </Link>
                </div>
                <div className="card-actions"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeturedTest;
