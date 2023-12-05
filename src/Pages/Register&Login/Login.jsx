import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Music Festival | Login</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="-mt-24 pt-32 md:pt-40 pb-10 md:pb-32 bg-gradient-to-l from-[#08060D] to-[#100829] flex items-center justify-center">
        <div className=" w-[500px] max-w-[500px] mx-6 lg:my-0 md:mx-auto bg-[#16113B] p-8 rounded-lg">
          <form onSubmit={handleLogin}>
            <h2 className="text-4xl font-bold text-center mb-8 text-sky-600">
              Login
            </h2>
            <hr className="mb-8 border-[#6c39ee31] w-1/2 mx-auto" />
            <div className="space-y-5">
              <div>
                <label className="text-white font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                />
              </div>
              <div>
                <label className="text-white font-semibold">Password</label>
                <div className="flex items-center">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                    className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                  />
                  <p
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="text-2xl font-bold text-white -ml-10 mt-2"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </p>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  value="Login"
                  className="block px-4 py-2 text-white bg-blue-800 hover:bg-blue-900 cursor-pointer font-bold mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                />
              </div>
            </div>
          </form>
          <div className="mt-4">
            <div>
              <button
                onClick={handleGoogleLogin}
                className="px-4 py-2 text-white font-bold flex justify-center items-center gap-3 w-full"
              >
                <FaGoogle className="text-2xl text-blue-500" /> Login With
                Google
              </button>
            </div>
            <p className="text-center text-gray-400">
              <small>Don't have an account? </small>
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
