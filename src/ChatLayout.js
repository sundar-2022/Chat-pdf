import React, { useRef, useState } from "react";
import "./ChatLayout.css";
import ChatSection from "./ChatSection";

const ChatLayout = () => {
  const fileInputRef = useRef(null);
  const [pdfDataList, setPdfDataList] = useState([]);
  const [selectedPdfId, setSelectedPdfId] = useState(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type === "application/pdf") {
      const pdfUrl = URL.createObjectURL(file);
      const pdfName = file.name;
      const pdfId = Date.now().toString();
      const newPdf = { id: pdfId, url: pdfUrl, name: pdfName, chat: [] };

      setPdfDataList((prevList) => [...prevList, newPdf]);
      setSelectedPdfId(pdfId);
    } else {
      console.error("Uploaded file is not a PDF.");
    }
  };

  const handlePdfSelect = (pdfId) => {
    setSelectedPdfId(pdfId);
  };

  const handlePdfDelete = (pdfId) => {
    const updatedPdfDataList = pdfDataList.filter((pdfDataItem) => pdfDataItem.id !== pdfId);
    setPdfDataList(updatedPdfDataList);

    if (selectedPdfId === pdfId) {
      const latestPdf = updatedPdfDataList[updatedPdfDataList.length - 1];
      setSelectedPdfId(latestPdf ? latestPdf.id : null);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
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
          {pdfDataList.map((pdfData) => (
            <div key={pdfData.id} className="uploaded-pdf">
              <div className="pdf-info">
                <button
                  className={`uploaded-pdf-button ${
                    pdfData.id === selectedPdfId ? "selected-pdf-button" : ""
                  }`}
                  onClick={() => handlePdfSelect(pdfData.id)}
                  title={pdfData.name}
                >
                  {pdfData.name}
                </button>
                <button
                  className="delete-pdf-button"
                  onClick={() => handlePdfDelete(pdfData.id)}
                  title="Delete PDF"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-viewer">
        {pdfDataList.map((pdfData) => (
          pdfData.id === selectedPdfId && (
            <embed key={pdfData.id} src={pdfData.url} width="100%" height="100%" type="application/pdf" />
          )
        ))}
      </div>
      <div className="chat">
        {pdfDataList.map((pdfData) => (
          pdfData.id === selectedPdfId && (
            <ChatSection
              key={pdfData.id}
              pdfData={pdfData}
              onChatUpdate={(newChat) => {
                const updatedPdfDataList = pdfDataList.map((pdfDataItem) => {
                  if (pdfDataItem.id === selectedPdfId) {
                    return { ...pdfDataItem, chat: newChat };
                  }
                  return pdfDataItem;
                });
                setPdfDataList(updatedPdfDataList);
              }}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ChatLayout;
