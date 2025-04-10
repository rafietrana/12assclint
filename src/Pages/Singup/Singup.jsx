import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Singup = () => {
  const [district, setDistrict] = useState([]);
  const [upzilas, setUpzillas] = useState([]);
  const [loading, setLoading] = useState(false);

  const { singUpUser, updateUserProfile } = useContext(AuthContext);

  useEffect(() => {
    fetch("/District.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("/Upzilas.json")
      .then((res) => res.json())
      .then((data) => setUpzillas(data));
  }, []);

  const handleSingupBtn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upozilla = form.upozilla.value;
    const photo = form.photo.files[0];
    const userStatus = "active";

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Password does not match");
    }

    const formData = new FormData();
    formData.append("image", photo);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        const singupInfo = {
          name,
          email,
          password,
          bloodGroup,
          district,
          upozilla,
          image: res.data.data.display_url,
          userStatus,
        };

        const result = await singUpUser(email, password);
        console.log(result);
        
        await updateUserProfile(name, res.data.data.display_url);
        toast.success("Successfully signed up");

        axios
          .post("https://my-ass-12-server.vercel.app/postuserinfo", singupInfo)
          .then((res) => {
            console.log(res.data);
          });
      } else {
        toast.error("Image upload failed, please try again");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during signup process");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="lg:flex justify-center items-center  b py-10 px-5">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center font-Outfit font-semibold text-2xl mb-5">
            <p>Sign Up Now</p>
          </div>
          <form onSubmit={handleSingupBtn}>
            <div className="space-y-4">
              <div>
                <label className="font-DM font-[500] text-[15px] text-[#788094]">Name</label>
                <input
                  type="text"
                  name="name"
                  className="border rounded-lg p-4 w-full outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-DM font-[500] text-[15px] text-[#788094]">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border rounded-lg p-4 w-full outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-DM font-[500] text-[15px] text-[#788094]">Password</label>
                <input
                  type="password"
                  name="password"
                  className="border rounded-lg p-4 w-full outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-DM font-[500] text-[15px] text-[#788094]">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="border rounded-lg p-4 w-full outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="file"
                  name="photo"
                  className="file-input file-input-bordered border-gray-200 w-full file-input-ghost mt-4"
                  required
                />
              </div>

              <div>
                <select
                  name="bloodGroup"
                  className="border outline-none py-2 rounded-lg p-3 w-full"
                  required
                >
                  <option value="" disabled>
                    Blood Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div>
                <select
                  name="district"
                  className="border outline-none py-2 rounded-lg p-3 w-full"
                  required
                >
                  <option value="" disabled>
                    Select Your District
                  </option>
                  {district.map((dataDistrict) => (
                    <option key={dataDistrict.id} value={dataDistrict.name}>
                      {dataDistrict.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="upozilla"
                  className="border outline-none py-2 rounded-lg p-3 w-full"
                  required
                >
                  <option value="" disabled>
                    Select Your Upzilla
                  </option>
                  {upzilas.map((dataUpozilla) => (
                    <option key={dataUpozilla.id} value={dataUpozilla.name}>
                      {dataUpozilla.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-b w-full my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-6"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <p className="animate-spin">
                    <ImSpinner9 />{" "}
                  </p>
                  <p className="font-Outfit font-[500] text-[16px]">Please wait, Image is uploading...</p>
                </div>
              ) : (
                "SIGN UP"
              )}
            </button>
          </form>

          <div className="flex justify-center items-center">
            <p>
              Already have an account?{" "}
              <span className="text-red-500">
                <Link to="/login">Login Now</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
