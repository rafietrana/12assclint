import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecuree from "../../Hooks/useAxiosSecuree";

const UserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecuree();

  const { data: getUserInfo = {}, refetch } = useQuery({
    queryKey: ["getUserInfo", user?.email],
    enabled: !!user?.email,
    queryFn: () =>
      axiosSecure(`/getuserinfo/${user?.email}`).then((res) => res.data),
  });

  const handleUserProfileUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const upozilla = form.upozilla.value;
    const district = form.district.value;
    const bloodGroup = form.bloodgroup.value;
    const image = form.image.value;

    const updateUserInfo = {
      name,
      image,
      upozilla,
      district,
      bloodGroup,
    };

    updateUserProfile(name, image)
      .then(() => {
        axiosSecure
          .put(`/updateuserinfo/${getUserInfo._id}`, updateUserInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success("Successfully updated user information");
            }
          });
      })
      .catch(() => {
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 py-10">
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          {/* Profile Overview */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <img
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
                src={getUserInfo?.image}
                alt="Profile"
              />
              <span className="absolute top-0 right-0 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex-1 text-center lg:text-left space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {getUserInfo?.name}
              </h2>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Email:</strong> {getUserInfo?.email}</p>
                <p><strong>District:</strong> {getUserInfo?.district}</p>
                <p><strong>Upazilla:</strong> {getUserInfo?.upozilla}</p>
                <p><strong>Blood Group:</strong> {getUserInfo?.bloodGroup}</p>
                <p><strong>Status:</strong> {getUserInfo?.userStatus}</p>
              </div>
            </div>
          </div>

          {/* Update Form */}
          <hr className="my-6" />
          <p className="text-lg font-semibold mb-4 text-gray-800">Update Profile</p>

          <form onSubmit={handleUserProfileUpdate} className="space-y-4">
            {[
              { label: "Name", name: "name", defaultValue: getUserInfo?.name },
              { label: "Image URL", name: "image", defaultValue: getUserInfo?.image },
              { label: "Upazilla", name: "upozilla", defaultValue: getUserInfo?.upozilla },
              { label: "District", name: "district", defaultValue: getUserInfo?.district },
              { label: "Blood Group", name: "bloodgroup", defaultValue: getUserInfo?.bloodGroup },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block mb-1 font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type="text"
                  defaultValue={field.defaultValue}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  style={{ backgroundColor: "#ffffff", colorScheme: "light" }}
                />
              </div>
            ))}

            <input
              type="submit"
              value="Update Now"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer transition"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
