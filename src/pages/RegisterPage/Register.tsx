import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
// import supabase from "../../config/supabaseClient.js";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
// import { auth, googleProvider } from "../../config/firebase.js";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import Line from "../../assets/LoginPage/Vector 8.svg";
import GoogleIcon from "../../assets/LoginPage/logo_googleg_48dp.png";
import AppleLogo from "../../assets/LoginPage/Path.svg";
import "./register.css";
import Spinner from "../../components/Spinner.js";

const RegisterPage: React.FC = () => {
  // Scroll to top of Register Page
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // Validating Name, Email and Password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // For their error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [verification, setVerification] = useState("");

  // Scrolling Solution
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // Shadow when mouse is hovering on the Form
  const handleMouseOver = () => {
    const form = document.querySelector(".form-div");
    form?.classList.add("shadow-md", "shadow-primaryPink");
  };

  // Remove shadow when mouse leaves the form
  const handleMouseLeave = () => {
    const form = document.querySelector(".form-div");
    form?.classList.remove("shadow-md", "shadow-primaryPink");
  };

  // SUPABASE
  const registerAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
    const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data) {
        console.log(data);
        // Registration Successful, show success message
        setVerification("Account Created Successfully!");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        navigate("/login");
      }
    } catch (err: any) {
      // Registration failed, show error message
      console.error(err);
      setPassError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function for Name Validation
  const handleNameValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    // Check if the entered names contains a number or special character
    if (/\d/.test(newName) || /[!@#$%^&*(),.?":{}|<>]/g.test(newName)) {
      setNameError("Name cannot contain numbers or special characters");
    } else {
      setNameError("");
    }

    // Update the name state
    setName(newName);
  };

  // Function for Email Validation
  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;

    // Check if the entered email is valid and does not contain the @ symbol
    if (!/@/.test(newEmail)) {
      setEmailError("Email must contain @ symbol");
    } else {
      setEmailError("");
    }

    // Update the email state
    setEmail(newEmail);
  };

  // Function for Password Validation
  const handlePasswordValidation = (newPassword: string) => {
    // Check if the entered password is less 6 or more characters, one number, one uppercase & one lower case.
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/g.test(newPassword)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "6 or more characters, one number, one uppercase & one lower case."
      );
    }

    //  Update the password state
    setPassword(newPassword);
  };

  // Function for password confirmation
  const handlePasswordConfirmation = (newPassword: string) => {
    console.log("Checking password");
    if (newPassword === password) {
      setPasswordConfirmError("Password Matches ✔");
      // console.log("Password matches ");
    } else {
      setPasswordConfirmError("Password does not match ❌");
      // console.log("Password does not match ");
    }
    // Update the Confirm password state
    setPasswordConfirm(newPassword);
    console.log(passwordConfirm);
  };

  return (
    <section className="bg-primaryGrey h-full lg:h-fit  flex justify-center items-center pb-[5em]">
      <div
        className="form-div mb-[2em] py-5 mt-[3em] rounded-lg flex flex-col gap-[1.6em] justify-center items-center border border-primaryBlue w-[90%] sm:w-[24em] lg:w-[22em]"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <form
          className="flex flex-col gap-[1.6em] w-[90%]"
          onSubmit={registerAuthentication}
        >
          <div className="text-center">
            <h1 className="text-4xl font-semibold pb-3 ">
              <span className="linkly-text">Welcome</span> 👋
            </h1>
            <h1 className="text-3xl text-primaryLite font-medium pb-4">
              Register
            </h1>
            <p className="text-primaryLite text-center text-sm">
              Create an account to get started
            </p>
          </div>

          <div className="container flex flex-col gap-[1em]">
            {/* Username */}
            <div>
              <input
                name="name"
                id="name"
                type="text"
                value={name}
                placeholder="Username"
                required
                onChange={handleNameValidation}
                // pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
              {nameError && (
                <p className="text-primaryLite text-sm mt-1">{nameError}</p>
              )}
            </div>

            {/* Email*/}
            <div>
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                placeholder="Email address"
                required
                onChange={handleEmailValidation}
                // pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
              {emailError && (
                <p className="text-primaryLite text-sm mt-1">{emailError}</p>
              )}
              {passError && (
                <p className="text-red-500 text-sm mt-1">{passError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <PasswordInput
                onChange={handlePasswordValidation}
                placeholder="Password"
              />
              {passwordError && (
                <p className="text-primaryLite text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div>
              <PasswordInput
                onChange={handlePasswordConfirmation}
                placeholder="Confirm password"
              />
              {passwordConfirmError && (
                <p className="text-primaryLite text-sm mt-1">
                  {passwordConfirmError}
                </p>
              )}
            </div>

            {verification && (
              <p className="text-green-500 text-base mt-1 font-medium">
                {verification}
              </p>
            )}

            <div className="mt-5 flex justify-center items-center w-full">
              <button
                className="p-2 w-full bg-primaryBlue rounded-lg font-semibold shadow-inner shadow-primaryBlue"
                type="submit"
              >
                Register
              </button>
            </div>

            <Spinner isLoading={isLoading} />

            <div>
              <p className="text-center text-primaryLite text-sm flex gap-1 justify-center items-center">
                <span> Already have an account?</span>
                <Link
                  to="/login"
                  className="text-primaryBlue font-medium hover:underline"
                >
                  Login
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
              // onClick={logInGoogle}
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

        <div className="text-center w-[90%] text-primaryLite">
          <p className="text-xs">
            By registering, you agree to Linkly's Terms of Service, Privacy
            Policy and Acceptable Use Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
