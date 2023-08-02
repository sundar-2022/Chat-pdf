// ChatLayout.js
import React, { useRef, useState } from "react";
import "./ChatLayout.css";
import ChatSection from "./ChatSection";

const ChatLayout = () => {
  const fileInputRef = useRef(null);
  const [uploadedPdfs, setUploadedPdfs] = useState([]);
  const [uploadedPdf, setUploadedPdf] = useState(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the uploaded file (e.g., display PDF content, etc.)
    console.log("Uploaded file:", file);

    // Check if the file is a PDF
    if (file.type === "application/pdf") {
      const pdfUrl = URL.createObjectURL(file);
      const pdfName = file.name; // Extract the client-provided PDF name
      setUploadedPdfs((prevPdfs) => [{ url: pdfUrl, name: pdfName }, ...prevPdfs]);
      setUploadedPdf(pdfUrl); // Display the latest uploaded PDF
    } else {
      console.error("Uploaded file is not a PDF.");
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        {/* Sidebar Content */}
        <div style={{ height: "64px", marginBottom: "15px", cursor: "pointer" }}>
          <button className="upload-button" onClick={handleFileUpload}>
            Upload PDF
          </button>
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div className="uploaded-pdfs">
          {uploadedPdfs.map((pdfData, index) => (
            <div key={index} className="uploaded-pdf">
              <button
                className={`uploaded-pdf-button ${
                  pdfData.url === uploadedPdf ? "selected-pdf-button" : ""
                }`}
                onClick={() => setUploadedPdf(pdfData.url)}
                title={pdfData.name} // Display the full name on hover
              >
                {pdfData.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-viewer">
        {/* Display the uploaded PDF document here */}
        {uploadedPdf && <embed src={uploadedPdf} width="100%" height="100%" />}
      </div>
      <div className="chat">
        {/* Chat Messages Content */}
        <ChatSection />
      </div>
    </div>
  );
};

export default ChatLayout;

