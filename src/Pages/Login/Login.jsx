import { Link } from "react-router-dom";
import loginImg from "../../assets/lgoin.jpg";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useAuth();
  console.log("alhamdulillah login user is ", loginUser);
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
          loginUser(email, password)
          .then(result =>{
               console.log(result.user);
               toast.success('alhamdulillah sucessfully logedin')
          })
          .catch(error =>{
            console.error(error)
            toast.error('please Try Agin ')
          })
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex bg-gray-100 shadow-lg ">
        <div className="w-1/2 h-[200px ] object-cover">
          <img className="w-[500px]" src={loginImg} alt="" />
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
          <div className="my-5 font-Outfit  font-semibold text-2xl ">
            <p>Login Now</p>
          </div>
          <div className="bg-white p-5 w-10/12  rounded-lg shadow-lg">
            <form onSubmit={handleLoginBtn}>
              <div className="space-y-3">
                <div>
                  <label className="font-DM font-[500] text-[15px] text-[#788094]">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    className="border rounded-lg p-4 w-full  outline-none "
                    required
                  />
                </div>

                <div>
                  <label className="font-DM font-[500] text-[15px] text-[#788094]">
                    Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    className="border rounded-lg p-4 w-full outline-none "
                    required
                  />
                </div>
              </div>
              <button className="bg-gradient-to-b w-full my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-6 ">
                Login Now
              </button>
            </form>
            <div className="flex justify-center items-center">
              <p>
                Create an account{" "}
                <span className="text-red-500">
                  <Link to={"/singup"}>Singup</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
