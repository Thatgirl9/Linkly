import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import QRCode from "qrcode.react";
import React from "react";

const ShortLink: React.FC<{
  url: string;
  qrCode: string;
}> = ({ url, qrCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (copied: boolean) => {
    navigator.clipboard.writeText(url);
    console.log("copied", copied);
  };

  const handleToggle = (checked: boolean) => {
    if (checked) {
      setCopied(true);
    } else {
      setCopied(false);
    }
  };

  const generateQrCode = () => {
    QRCode.toDataUrl(
      url,
      {
        width: "6rem",
        height: "6rem",
        margin: 2,
        color: {
          dark: "black",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-1 px-2 border-2 border-stroke rounded-md">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
      {copied && <span className="mt-3">Copied!</span>}
      <div className="flex gap-4 items-center justify-center mt-5">
        <ToggleSwitch onChange={handleToggle} onClick={copyToClipboard} />

        <p className="text-base">Auto Paste from Clipboard </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <QRCode value={qrCode} className="w-24 h-24 mr-4 bg-white"></QRCode>
        {/* <QRCode
          value="<https://podcast-page-thatgirl9-987724.netlify.app/>"
          // ref={qrCodeRef}
        /> */}
        <button
          onClick={() => window.open(qrCode, "_blank")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download QR Code
        </button>
        {/* <button onClick={downloadQRCode}>Download QR Code</button> */}
      </div>
    </div>
  );
};

export default ShortLink;
