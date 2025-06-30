import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import useAxiosSecuree from "../../Hooks/useAxiosSecuree";
import useAuth from "../../Hooks/useAuth";

const AllBanner = () => {
  const axiosSecure = useAxiosSecuree();
  const { user } = useAuth();
  const { data: allBannerData = [], refetch } = useQuery({
    queryKey: ["getBanner"],
    queryFn: () =>
      axiosSecure(`/getbanner?email=${user?.email}`).then((res) => res.data),
  });

  const handleActiveBtn = (banner) => {
    axios
      .put(`https://my-ass-12-server.vercel.app/updateisactive/${banner._id}`)
      .then(() => {
        toast.success("Status Updated");
        refetch();
      })
      .catch(() => toast.error("Update failed"));
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left whitespace-nowrap">#</th>
              <th className="p-3 text-left whitespace-nowrap">Banner</th>
              <th className="p-3 text-left whitespace-nowrap max-w-[120px]">
                Name
              </th>
              <th className="p-3 text-left whitespace-nowrap max-w-[150px]">
                Title
              </th>
              <th className="p-3 text-left whitespace-nowrap hidden md:table-cell max-w-[120px]">
                Coupon Code
              </th>
              <th className="p-3 text-left whitespace-nowrap hidden md:table-cell max-w-[100px]">
                Coupon Rate
              </th>
              <th className="p-3 text-center whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {allBannerData.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-6 text-gray-500">
                  No Banners Found
                </td>
              </tr>
            ) : (
              allBannerData.map((banner, idx) => (
                <tr
                  key={banner._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="p-3 whitespace-nowrap">{idx + 1}</td>
                  <td className="p-3">
                    <img
                      src={banner.bannerimg}
                      alt={banner.bannername}
                      className="w-24 h-16 object-cover rounded-md"
                      loading="lazy"
                    />
                  </td>
                  <td
                    className="p-3 max-w-[120px] truncate"
                    title={banner.bannername}
                  >
                    {banner.bannername}
                  </td>
                  <td
                    className="p-3 max-w-[150px] truncate"
                    title={banner.bannertitle}
                  >
                    {banner.bannertitle}
                  </td>
                  <td
                    className="p-3 hidden md:table-cell max-w-[120px] truncate"
                    title={banner.couponcode || "-"}
                  >
                    {banner.couponcode || "-"}
                  </td>
                  <td className="p-3 hidden md:table-cell whitespace-nowrap">
                    {banner.couponrate || "-"}
                  </td>
                  <td className="p-3 text-center whitespace-nowrap">
                    {!banner.isActive ? (
                      <button
                        onClick={() => handleActiveBtn(banner)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
                      >
                        Activate
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-blue-600 cursor-not-allowed text-white font-semibold py-2 px-5 rounded-full shadow"
                      >
                        Activated
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanner;
