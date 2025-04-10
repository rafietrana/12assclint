import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success("Successfully logged in!");
        navigate("/dashboard");
        console.log(result);
        
      })
      .catch((error) => {
        console.log(error);
        
        toast.error("Login failed, please try again.");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-600 mt-3">Welcome back, please login to continue.</p>
        </div>

        <form onSubmit={handleLoginBtn} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-b from-green-400 to-green-600 text-white font-bold rounded-md hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out"
            >
              Login Now
            </button>
          </div>
        </form>

        {/* Signup Redirect */}
        <div className="mt-5 text-center">
          <p className="text-sm text-gray-600">
            Dont have an account?{" "}
            <Link to="/signup" className="text-green-500 font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
