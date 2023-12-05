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

const Register = () => {
  const auth = getAuth(app);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6 && password.length > 0) {
      return setError("Password must be more than 6 characters");
    } else if (password.length == 0) {
      return setError("Enter Your Password");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Don't have a capital Letter");
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return setError("Don't have a special Character");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(name, photo)
          .then(() => {
            const loggedProfile = result.user;
            console.log(loggedProfile);
          })
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Congratulation! Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Email Already Exist",
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
        <title>Music Festival | Register</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="-mt-24 pt-28 md:pt-48 pb-10 md:pb-32 bg-gradient-to-l from-[#08060D] to-[#100829] flex items-center justify-center lg:h-screen">
        <div className="w-[500px] max-w-[500px] mx-6 my-6 lg:my-0 md:mx-auto bg-[#16113B] p-8 rounded-lg">
          <form onSubmit={handleRegister}>
            <h2 className="text-4xl font-bold text-center mb-8 text-sky-600">
              Registers
            </h2>
            <hr className="mb-8 border-[#6c39ee31] w-1/2 mx-auto" />
            <div className="space-y-5">
              <div>
                <label className="text-white font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                />
              </div>
              <div>
                <label className="text-white font-semibold">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                />
              </div>
              <div>
                <label className="text-white font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                />
              </div>
              <div>
                <label className="text-white font-semibold">Password</label>
                <div className="flex items-center">
                  <input
                    type={show ? "show" : "password"}
                    name="password"
                    placeholder="Password"
                    className="block px-4 py-2 text-white mt-2 border border-[#514277] rounded-full w-full bg-[#15151769]"
                  />
                  <span
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="-ml-12 mt-2 text-white text-2xl"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div>
                  <p className="text-red-500">{error}</p>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  value="Register"
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
                <FaGoogle className="text-2xl text-blue-500" /> Continue With
                Google
              </button>
            </div>
            <p className="text-center text-gray-400">
              <small>Already have an account? </small>
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
