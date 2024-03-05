import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
// import { auth, googleProvider } from "../../config/";
import { auth, googleProvider } from "../../config/firebase.js";
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import Line from "../../assets/LoginPage/Vector 8.svg";
import GoogleIcon from "../../assets/LoginPage/logo_googleg_48dp.png";
import AppleLogo from "../../assets/LoginPage/Path.svg";
import "./login.css";
import { useEffect, useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // navigate("/dashboard");
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, setUser]);

  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      navigate("/dashboard");
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(err.code);
      // if (err.code === "auth/invalid-credential") {

      //   navigate("/register");
      // } else {
      //   console.log(err.message);
      // }
    }
  };

  const logInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleMouseOver = () => {
    const form = document.querySelector(".form-div");
    form?.classList.add("shadow-md", "shadow-primaryPink");
  };

  const handleMouseLeave = () => {
    const form = document.querySelector(".form-div");
    form?.classList.remove("shadow-md", "shadow-primaryPink");
  };

  const passwordCheck = (newPassword: string) => {
    const value = newPassword;
    setPassword(value);
    console.log(value, "Checking password");
  };

  return (
    <section className="bg-primaryGrey h-screen flex justify-center items-center ">
      <div
        className="form-div border border-primaryBlue p-5 rounded-lg flex flex-col gap-[1.6em] w-[90%] sm:w-fit justify-center items-center "
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <form
          className="flex flex-col gap-[1.6em]"
          onClick={(e) => e.preventDefault()}
        >
          <div>
            <h1 className="text-4xl font-semibold pb-3 text-center">
              <span className="linkly-text">Welcome Back</span> 👋
            </h1>
            <h1 className="text-3xl text-primaryLite text-center font-medium">
              Login
            </h1>
          </div>

          <div className="container flex flex-col gap-[1em]">
            {/* Error Message */}
            {errorMessage && (
              <div className="text-sm text-red-500">
                <p>
                  Account not found.{" "}
                  <Link to="/register" className="text-primaryBlue underline">
                    Register ?
                  </Link>{" "}
                </p>
              </div>
            )}

            {/* Email or Username */}
            <div>
              <input
                type="text"
                placeholder="Email address or username"
                required
                pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <PasswordInput onChange={passwordCheck} placeholder="Password" />
            </div>

            <div className="flex justify-end items-end">
              <p className="text-sm text-primaryLite">Forgot your password?</p>
            </div>

            <div className="mt-5 flex justify-center items-center w-full">
              <button
                className="p-2 w-full bg-primaryBlue rounded-lg font-semibold shadow-inner shadow-primaryBlue"
                onClick={logIn}
              >
                Login
              </button>
            </div>

            <div>
              <p className="text-center text-primaryLite text-sm flex gap-1 justify-center items-center">
                <span>Don't have an account?</span>
                <Link
                  to="/register"
                  className="text-primaryBlue font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>

        <div className="pt-[1em]">
          <div>
            <p className="flex items-center justify-center w-full gap-4 font-semibold">
              <span>
                <img src={Line} alt="Line" className="w-[5em]" />
              </span>
              <span>Or with</span>
              <span>
                <img src={Line} alt="Line" className="w-[5em]" />
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-[1em]">
            <button
              className="flex items-center justify-center gap-2 border border-primaryBlue bg-primaryBlack p-1 px-2 rounded-md "
              onClick={logInGoogle}
            >
              <span>
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  width="20px"
                  height="20px"
                />
              </span>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-primaryBlue bg-primaryBlack p-1 px-2 rounded-md ">
              <span>
                <img
                  src={AppleLogo}
                  alt="Google Icon"
                  width="17px"
                  height="17px"
                />
              </span>
              Apple
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
