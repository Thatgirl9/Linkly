/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import { supabase } from "../../config/supabaseClient.js";
// import { createClient, SupabaseClient } from "@supabase/supabase-js";

// import Line from "../../assets/LoginPage/Vector 8.svg";
// import GoogleIcon from "../../assets/LoginPage/logo_googleg_48dp.png";
// import AppleLogo from "../../assets/LoginPage/Path.svg";
import "./login.css";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState("");

  const navigate = useNavigate();

  console.log(user);

  function listenToSignInEvent() {
    supabase.auth.onAuthStateChange((event: any, session: any) => {
      if (event === "SIGNED_IN") {
        console.log("User signed in:", session.user);
      }
    });
  }

  // // Call the function to start listening to the sign in event
  listenToSignInEvent();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        if (error.message === "Email not confirmed") {
          setErrorMessage(
            "Email not confirmed. Please check your email for the confirmation link."
          );
        } else {
          setErrorMessage("Error signing in: " + error.message);
        }

        throw error;
      }

      if (data) {
        console.log(data);
        setUser(data.user);
        setLogin("Login Successful!");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        navigate(`/dashboard/${email}`);
      } else {
        setErrorMessage(`Account not found. Register?`);
        setLogin("Account not found");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message === "Email not confirmed") {
        setErrorMessage(
          "Email not confirmed. Please check your email for the confirmation link."
        );
      } else {
        setErrorMessage(err.message);
      }
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
    <section className="bg-primaryGrey h-[100dvh] md:h-screen lg:h-fit pb-[5em] flex justify-center items-center ">
      <div
        className="form-div border border-primaryBlue p-5 rounded-lg flex flex-col gap-[1.6em] w-[90%]  justify-center items-center sm:w-[24em] lg:w-[22em] mt-[4em]"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <form
          className="flex flex-col gap-[1.6em] w-[90%]"
          onSubmit={handleLogin}
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
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Email*/}
            <div>
              <input
                type="text"
                placeholder="Email address"
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
              <Link to="/forgotpassword" className="text-sm text-primaryLite">
                Forgot your password?
              </Link>
              <p></p>
            </div>

            {login && (
              <p className="text-green-500 text-base mt-1 font-medium">
                {login}
              </p>
            )}

            <div className="mt-5 flex justify-center items-center w-full">
              <button
                type="submit"
                className="p-2 w-full bg-primaryBlue rounded-lg font-semibold shadow-inner shadow-primaryBlue"
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

        {/* <div className="pt-[1em]">
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
            </div> */}
      </div>
    </section>
  );
};

export default LoginPage;
