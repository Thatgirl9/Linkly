import PasswordInput from "../../components/PasswordInput";
import "./login.css";

const LoginPage: React.FC = () => {
  return (
    <section className="bg-primaryGrey h-screen flex justify-center items-center ">
      <form className="border border-primaryBlue p-5 rounded-md flex flex-col gap-[1.6em]">
        <div>
          <h1 className="text-4xl font-semibold pb-3">
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
          <PasswordInput />
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
