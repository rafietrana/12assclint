import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecuree from "../../Hooks/useAxiosSecuree";

const UserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecuree();

  const { data: getUserInfo = [], refetch } = useQuery({
    queryKey: ["getUserInfo", user?.email],
    enabled: !!user?.email,
    queryFn: () =>
      axiosSecure(`/getuserinfo/${user?.email}`).then((res) => {
        return res?.data;
      }),
  });

  // $&

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
    // // $&

    updateUserProfile(name, image)
      .then(() => {
        // // $&

        axiosSecure
          .put(`/updateuserinfo/${getUserInfo._id}`, updateUserInfo)
          .then((res) => {
            // // $&
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success("sucessfully updated User Information");

              // setTimeout(() => {
              //   window.location.reload();
              // }, 1000);
            }
          });
      })
      .catch(() => {
        // console.error(error);
        // // $&
      });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-7/12 mx-auto">
        <div className="max-w-md mx-auto my-8 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
          <div className="flex flex-col items-center sm:flex-row sm:items-start">
            <div className="mb-4 sm:mb-0 sm:mr-6 relative lg:mt-4">
              <img
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500"
                src={getUserInfo?.image}
                alt="not found"
              />
              <div className="absolute top-0 right-0 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {getUserInfo?.name}
              </h2>
              <div className="grid grid-cols-1 gap-2">
                <p>
                  <strong className="font-semibold text-gray-700">
                    Password:
                  </strong>{" "}
                  <span className="text-gray-600">{getUserInfo?.password}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-700">
                    Email:
                  </strong>{" "}
                  <span className="text-gray-600">{getUserInfo?.email}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-700">
                    District:
                  </strong>{" "}
                  <span className="text-gray-600">{getUserInfo?.district}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-700">
                    Upazilla:
                  </strong>{" "}
                  <span className="text-gray-600">{getUserInfo?.upozilla}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-700">
                    Status:
                  </strong>{" "}
                  <span className="text-gray-600">
                    {getUserInfo?.userStatus}
                  </span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-700">
                    Blood Group:
                  </strong>{" "}
                  <span className="text-gray-600">
                    {getUserInfo?.bloodGroup}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="font-Outfit    my-6">Update Profile</p>
          <div>
            <form onSubmit={handleUserProfileUpdate}>
              <div>
                <label>Name</label> <br />
                <input
                  name="name"
                  type="text"
                  defaultValue={getUserInfo?.name}
                  className="border px-3 py-2 w-full outline-none "
                />
              </div>

              <div>
                <label>Image</label> <br />
                <input
                  name="image"
                  type="text"
                  className="border px-3 py-2 w-full outline-none "
                  defaultValue={getUserInfo?.image}
                />
              </div>
              <div>
                <label>upozilla</label> <br />
                <input
                  name="upozilla"
                  type="text"
                  className="border px-3 py-2 w-full outline-none "
                  defaultValue={getUserInfo?.upozilla}
                />
              </div>
              <div>
                <label>District</label> <br />
                <input
                  name="district"
                  type="text"
                  className="border px-3 py-2 w-full outline-none "
                  defaultValue={getUserInfo?.district}
                />
              </div>
              <div>
                <label htmlFor="">Blood Group</label> <br />
                <input
                  name="bloodgroup"
                  type="text"
                  className="border px-3 py-2 w-full outline-none "
                  defaultValue={getUserInfo?.bloodGroup}
                />
              </div>
              <div className="my-2">
                <input
                  className="bg-gray-100 px-3 py-2 cursor-pointer"
                  type="submit"
                  value="Update Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
