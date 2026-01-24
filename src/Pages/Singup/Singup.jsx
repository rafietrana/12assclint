import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Signup = () => {
  const [district, setDistrict] = useState([]);
  const [upzilas, setUpzillas] = useState([]);
  const [loading, setLoading] = useState(false);

  const { updateUserProfile, user ,singUpUser} = useContext(AuthContext);

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

  const handleSignupBtn = async (e) => {
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
       console.log('alhamdulillah image uploading status is  ', res);

      if (res.data.success) {

        singUpUser(email, password)
         .then((result) => {
        toast.success("Successfully singed in!");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sing in failed, please try again.");
      });

        const signupInfo = {
          name,
          email,
          password,
          bloodGroup,
          district,
          upozilla,
          image: res.data.data.display_url,
          userStatus,
        };

        if (user){
      await updateUserProfile(name, res.data.data.display_url);
              toast.success("Successfully signed up");
                  axios
          .post("https://my-ass-12-server.vercel.app/postuserinfo", signupInfo)
          .then((res) => {
            console.log('alhamdulillah post userInfo response is', res);
          });
        }
        else{
        console.log('no user found ');
        
        }
       
        

  


    
      } else {
        toast.error("Image upload failed, please try again");
      }
    } catch (error) {
      console.error(error);
      console.log('error is', error);
      
      toast.error("Error during signup process");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-white text-black py-10"
      style={{ colorScheme: "light" }} // Prevent browser theme interference
    >
      <div className="lg:flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 p-8 rounded-xl">
          <div className="text-center font-Outfit font-semibold text-2xl mb-6 flex justify-center items-center gap-2 text-green-600">
            <FaUserPlus />
            <p>Sign Up Now</p>
          </div>
          <form onSubmit={handleSignupBtn} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <input
                type="file"
                name="photo"
                className="file-input w-full file-input-bordered file-input-sm file-input-ghost border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Blood Group */}
            <div>
              <select
                name="bloodGroup"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* District */}
            <div>
              <select
                name="district"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Your District
                </option>
                {district.map((dataDistrict) => (
                  <option key={dataDistrict.id} value={dataDistrict.name}>
                    {dataDistrict.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Upozilla */}
            <div>
              <select
                name="upozilla"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Your Upazila
                </option>
                {upzilas.map((dataUpozilla) => (
                  <option key={dataUpozilla.id} value={dataUpozilla.name}>
                    {dataUpozilla.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <ImSpinner9 className="animate-spin text-white" />
                  <span>Please wait...</span>
                </div>
              ) : (
                "SIGN UP"
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium hover:underline">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
