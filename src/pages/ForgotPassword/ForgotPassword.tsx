import "./forgotpass.css";
import { auth } from "../../config/firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner.js";

const ForgotPassword: React.FC = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPasswordSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // send password reset email
      await new Promise((resolve) => setTimeout(resolve, 10000));

      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent successfully. Please check your email");
      setMessage(
        "Password reset email sent successfully. Please check your email"
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError("Error sending password reset email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-primaryBlack h-screen flex  items-center flex-col">
      <form
        onSubmit={handleResetPasswordSubmit}
        className="flex justify-center items-center flex-col mt-[3em]"
      >
        <h2 className="font-bold py-[2em] text-3xl">Forgot Password...</h2>
        <p className="mb-[1em] text-primaryPink font-medium">
          Enter your email to reset your password
        </p>
        <input
          type="email"
          placeholder="Email"
          className="py-3 px-4 w-full rounded-lg focus:outline-none bg-primaryBlack border-primaryPink focus:border-b-2 border"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
        {isLoading && <Spinner isLoading={isLoading} />}
        <button
          type="submit"
          className="mt-[2em] border-2 border-primaryBlue px-2 p-1 rounded-md font-medium"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
