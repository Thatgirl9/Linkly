import { useRef } from "react";
import React from "react";
import QRCode from "qrcode.react";

interface QRCodeComponentProps {
  qrUrl: string;
}

const QrCode: React.FC<QRCodeComponentProps> = ({ qrUrl }) => {
  const qrCodeRef = useRef<HTMLCanvasElement | null>(null);

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current;
    const pngUrl = canvas
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl ?? "";
    downloadLink.download = "qrcode.png";
    downloadLink.type = "image/png";
    downloadLink.setAttribute("download", "qrcode.png");

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <QRCode value={qrUrl} ref={qrCodeRef} />

      <button
        onClick={() => window.open(qrUrl, "_blank")}
        className="bg-primaryBlue p-1 px-2 rounded-md font-semibold"
      >
        <a onClick={downloadQRCode}>Download QR Code</a>
      </button>
    </div>
  );
};

export default QrCode;
