import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success("Successfully logged in!");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed, please try again.");
      });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-white text-black py-12"
      style={{ colorScheme: "light" }} // dark mode ignore
    >
      <div className="w-full max-w-md border border-gray-200 rounded-xl p-8 bg-white">
        <div className="text-center mb-6 flex flex-col items-center justify-center">
          <FaSignInAlt className="text-green-600 text-3xl mb-2" />
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-sm text-gray-600 mt-1">
            Welcome back, please login to continue.
          </p>
        </div>

        <form onSubmit={handleLoginBtn} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
          >
            Login Now
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <Link to="/singup" className="text-green-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
