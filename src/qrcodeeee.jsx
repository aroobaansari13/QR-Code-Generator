import { useState } from "react";
import "./qrcode.css";

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeURL, setQrCodeURL] = useState("");

  const generateQRCode = () => {
    if (inputValue.length > 0) {
       setQrCodeURL(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=`+inputValue);
      setInputValue(""); 
    } else {
      alert("Please enter valid text or URL!");
    }
  };
  return (
    <div className="parent">
    <div className="container">
      <p>Enter text or URL</p>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div id="imgBox">
        {qrCodeURL && <img src={qrCodeURL}></img>}
      </div>
      <button onClick={generateQRCode}>Generate QR Code</button>
    </div>
    </div>
  );
}