import { useState } from "react";
import InputLink from "../assets/link.png";

const Form: React.FC<{ onSubmit: (url: string) => void }> = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <div className="sm:w-[30em] w-[90%]  rounded-full flex items-center justify-center gap-2 bg-primaryGrey px-[0.3em] h-[3.3em] border-[3px] border-stroke">
        <img
          src={InputLink}
          alt="Link Icon"
          className="h-[1.2em] w-[2em] pl-[0.5em]"
        />
        <input
          className="bg-transparent outline-none sm:w-[28em] w-[70%]"
          placeholder="Enter the link here"
          required
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button
          className="bg-primaryBlue text-white font-semibold px-4 py-2 rounded-full shadow-2xl shadow-primaryBlue"
          type="submit"
        >
          Shorten!
        </button>
      </div>
    </form>
  );
};

export default Form;
