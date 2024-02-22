import PasswordInput from "../../components/PasswordInput";
import "./login.css";

const LoginPage: React.FC = () => {
  const handleMouseOver = () => {
    const form = document.querySelector("form");
    form?.classList.add("shadow-md", "shadow-primaryPink");
  };

  const handleMouseLeave = () => {
    const form = document.querySelector("form");
    form?.classList.remove("shadow-md", "shadow-primaryPink");
  };

  const passwordCheck = () => {
    console.log("Checking password");
  };

  return (
    <section className="bg-primaryGrey h-screen flex justify-center items-center ">
      <form
        className="border border-primaryBlue p-5 rounded-lg flex flex-col gap-[1.6em] w-[90%] sm:w-fit"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
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
          {/* Email or Username */}
          <div>
            <input
              type="text"
              placeholder="Email address or username"
              required
              pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$) | ([a-zA-Z]+$)"
              className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 "
            />
          </div>

          {/* Password */}
          <div>
            <PasswordInput
              onPasswordChange={passwordCheck}
              // style={{
              //   backgroundColor: "#0B101B",
              //   border: "1px solid #EB568E",
              //   borderRadius: "8px",
              //   padding: "12px 16px",
              //   width: "100%",
              //   // focusBorderBottomColor: "#EB568E",
              // }}
            />
          </div>

          <div className="flex justify-end items-end">
            <p className="text-sm text-primaryLite">Forgot your password?</p>
          </div>

          <div className="mt-5 flex justify-center items-center">
            <button className="p-1 px-6 bg-primaryBlue rounded-md font-semibold shadow-inner shadow-primaryBlue">
              Login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
