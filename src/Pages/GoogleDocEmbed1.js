import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./Embed.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Cookies from "js-cookie";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const GoogleDocEmbed1 = () => {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const email = Cookies.get("user_email");
    if (!email) {
      window.location.href = `https://${window.location.hostname}/mern/dashboard`;
    }
  }, []);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const getPages = () => {
    const items = [];
    let i = 1;
    while (i <= numPages) {
      items.push(
        <Page pageNumber={i} key={i * Math.floor(Math.random() * 1000) + 1} />
      );
      i++;
    }
    return items;
  };

  return (
    <div className="doc-cont">
      <div className="doc-title">{`Hackathon Task `}</div>
      <div>
        <Document
          file={
            "https://docs.google.com/document/d/1qgSqSus3tfGP3oSfLgCZ9G-bUn4K2iE0ImgSilcad3E/export?format=pdf"
          }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {getPages()}
        </Document>
      </div>
    </div>
  );
};

export default GoogleDocEmbed1;
