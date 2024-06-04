import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllTestPage = () => {
  // const thisDate = new Date().toISOString().split("T")[0];
  const { data: getTestPage = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios("http://localhost:5000/gettestall").then((res) => {
        return res.data;
      }),
  });

  console.log("alhamdulillah gettestall page data is", getTestPage);

  //  const finalData =     getTestPage.filter(pageTestGet => pageTestGet.date >= thisDate);
  //  console.log('alhamdulillah finaldata is', finalData);

  return (
    <div className="w-10/12 mx-auto my-11 ">
      <div className="   mx-auto grid lg:grid-cols-4 gap-6  md:grid-cols-2 grid-cols-1">
        {getTestPage.map((pageTestGet) => (
          <div
            key={pageTestGet._id}
            className="card card-compact w-70 bg-base-100 border"
          >
            <figure>
            <div className="avatar p-5">
  <div className="w-24 rounded border-4">
    <img src= {pageTestGet.bannerimg}/>
  </div>
</div>
            </figure>
            <div className="card-body ">
              <h2 className="font-Outfit text-xl font-medium text-center">{pageTestGet?.testname}</h2>
              <p className="text-center">{pageTestGet.date.split('T')[0]}</p>
              <p className="text-center"><span className="font-Outfit">Slots Number: </span> {pageTestGet.slotsnumber}</p>
              <p className="text-center">{pageTestGet.testdetails.slice(0,50)}...</p>
              <div className="text-center">
              <button className="bg-gradient-to-b from-gray-100 to-gray-200 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                View More
              </button>
              </div>
              <div className="card-actions   ">

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTestPage;
