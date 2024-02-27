// import { useState } from "react";
// import ToggleSwitch from "./ToggleSwitch";

const ShortLink: React.FC<{
  url: string;
  qrCode: string;
}> = ({ url, qrCode }) => {
  // const [copied, setCopied] = useState(false);

  // const copyToClipboard = (copied: boolean) => {
  //   navigator.clipboard.writeText(url);
  //   console.log("copied", copied);
  //   // setCopied(true);
  // };
  // const;

  // const handleToggle = (checked: boolean) => {
  //   console.log("Checked: ", checked);
  // };

  return (
    <div>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
        {/* {copied && <span>Copied!</span>} */}
      </p>
      <div className="flex items-center justify-center mt-8">
        <img src={qrCode} alt="QR Code" className="w-24 h-24 mr-4" />
        <button
          onClick={() => window.open(qrCode, "_blank")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
