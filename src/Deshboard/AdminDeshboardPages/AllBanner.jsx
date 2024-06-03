import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const AllBanner = () => {
  const { data: allBannerData = [], refetch } = useQuery({
    queryKey: ["getBanner"],
    queryFn: () =>
      axios("http://localhost:5000/getbanner").then((res) => {
        return res.data;
      }),
  });

  console.log("alhamdulillah bannerData is", allBannerData);






const handleActiveBtn = (bannerData) =>{
        console.log('alhamdulillah is active is id is', bannerData._id);

      axios.put(`http://localhost:5000/updateisactive/${bannerData._id}`)
      .then(res =>{
        console.log('alhamdulillah this is',res.status);
      
        toast.success('alhamdulillah')
        refetch()
        
      })


}
  return (
    <div className="fle  flex-col w-full">
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>

                <th>Banner Image</th>
                <th>Name</th>
                <th>Banner Title</th>
                <th>Description</th>
                <th>Coupon Code</th>
                <th>Coupon Rate</th>
                <th>IsActive</th>
              </tr>
            </thead>
            <tbody>
              {allBannerData.map((dataAllBanner) => (
                <tr key={dataAllBanner._id}>
                  <th>1</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={dataAllBanner.bannerimg} />
                      </div>
                    </div>
                  </td>
                  <td>{dataAllBanner?.bannername}</td>
                  <td>{dataAllBanner?.bannertitle}</td>
                  <td className="">
                    {dataAllBanner?.description.slice(0, 40)}....
                  </td>
                  <td>{dataAllBanner?.couponcode}</td>
                  <td>{dataAllBanner?.couponrate}</td>
                  <td>
                    {!dataAllBanner?.isActive ? (
                      <button onClick={()=>handleActiveBtn(dataAllBanner)} className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                        Active Now
                      </button>
                    ) : (
                      <button
            
                      className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      Activated
                    </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBanner;
