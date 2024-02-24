import { Link } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";

import Line from "../../assets/LoginPage/Vector 8.svg";
import GoogleIcon from "../../assets/LoginPage/logo_googleg_48dp.png";
import AppleLogo from "../../assets/LoginPage/Path.svg";
import "./register.css";

const RegisterPage: React.FC = () => {
  const handleMouseOver = () => {
    const form = document.querySelector(".form-div");
    form?.classList.add("shadow-md", "shadow-primaryPink");
  };

  const handleMouseLeave = () => {
    const form = document.querySelector(".form-div");
    form?.classList.remove("shadow-md", "shadow-primaryPink");
  };

  const passwordCheck = () => {
    console.log("Checking password");
  };

  return (
    <section className="bg-primaryGrey md:h-screen lg:h-fit  flex justify-center items-center scroll-m-20">
      <div
        className="form-div mb-[2em] py-5 mt-[3em] rounded-lg flex flex-col gap-[1.6em] justify-center items-center border border-primaryBlue w-[90%] sm:w-[24em] lg:w-[22em]"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <form className="flex flex-col gap-[1.6em] w-[90%]">
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
                type="text"
                placeholder="Username"
                required
                pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
            </div>

            {/* Email*/}
            <div>
              <input
                type="text"
                placeholder="Email address"
                required
                pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
                className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
              />
            </div>

            {/* Password */}
            <div>
              <PasswordInput
                onPasswordChange={passwordCheck}
                placeholder="Password"
              />
            </div>

            <div>
              <PasswordInput
                onPasswordChange={passwordCheck}
                placeholder="Confirm password"
              />
            </div>

            <div className="flex justify-end items-end">
              <p className="text-sm text-primaryLite">Forgot your password?</p>
            </div>

            <div className="mt-5 flex justify-center items-center w-full">
              <button className="p-2 w-full bg-primaryBlue rounded-lg font-semibold shadow-inner shadow-primaryBlue">
                Register
              </button>
            </div>

            <div>
              <p className="text-center text-primaryLite text-sm flex gap-1 justify-center items-center">
                <span>Have an account?</span>
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
            <button className="flex items-center justify-center gap-2 border border-primaryBlue bg-primaryBlack p-1 px-2 rounded-md ">
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

export default RegisterPage;
