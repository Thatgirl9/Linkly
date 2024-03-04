import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
// import QRCode from "qrcode.react";
import React from "react";
import QrCode from "./QRCode";

const ShortLink: React.FC<{
  url: string;
  qrCode: string;
  // toDataUrl: () => string;
}> = ({ url }) => {
  const [copied, setCopied] = useState(false);
  // const [qrCode, setQrCode] = useState("");

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
        <QrCode qrUrl={url} />
      </div>
    </div>
  );
};

export default ShortLink;
