"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';
// import styles from "../styles/ChatInterface.module.css";
import styles from "../styles/InvestmentCopilot.module.css";
import '../styles/globals.css';
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph } from "docx";

const InvestmentCopilot = ({ companySymbol, mode, onUploadSuccess }) => {
  const [messages, setMessages] = useState([]);
  const [report, setReport] = useState([]);
  // const [reportOriginal, setReportOriginal] = useState(['paragraph 1 ....', 'paragraph 2...']);
  const [input, setInput] = useState("");
  const { currentUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  
  
  const formatBulletPoints = (match) => {
    let bulletPoint = match.trim(); // Remove leading and trailing spaces
    return `<br>${bulletPoint}<br>`;
  }

  // const formatBulletPointsNL = (match) => {
  //   let bulletPoint = match.trim(); // Remove leading and trailing spaces
  //   return `\n${bulletPoint}\n`;
  // }

  const convertTextToWordDocument = async (): Promise<Blob> => {
    const children = report.flatMap((paragraph) => [
      new Paragraph({
        text: "",
      }),
      new Paragraph({
        text: paragraph,
      }),
    ])

    let doc = new Document({
      sections: [
        {
          properties: {},
          children: children,
        }
      ]
    });

    // doc.addSection({
    //   properties: {},
    //   children: [
    //     new Paragraph({
    //       children: [
    //         {
    //           text: text,
    //         },
    //       ],
    //     }),
    //   ],
    // });
    const buffer = await Packer.toBuffer(doc);
    return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  };

  const downloadAndUpload = async () => {
    // console.log(selectedFile);
    // if (!selectedFile) {
    //   // alert('Please select a file to upload first');
    //   setToastMessage("Please select a file to upload first");
    //   setToastVariant("danger");
    //   setShowToast(true);
    //   return;
    // }
    const wordDocumentBlob = await convertTextToWordDocument();
    const date = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -7);

    const filename = `${companySymbol}_investment_report_${date}.docx`;
    saveAs(wordDocumentBlob, filename);

    const formData = new FormData();
    formData.append("file", wordDocumentBlob, filename);
    formData.append("companySymbol", companySymbol);
    formData.append("userId", currentUser.uid);
    formData.append("isManual", 'yes');
    // Upload the file to the server
    try {
      const response = await fetch(
        "http://localhost:8080/api/upload-report",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("File uploaded successfully!");
        // setToastMessage("File uploaded successfully!");
        // setToastVariant("success");

        // tell parent to fetch updated list of files
        onUploadSuccess();
      } else {
        console.error("File upload failed.");
        // setToastMessage("File upload failed.");
        // setToastVariant("danger");
      }
      // setShowToast(true);
      return response.ok;
    } catch (error) {
      console.error("Error:", error);
      // setToastMessage("Error uploading file");
      // setToastVariant("danger");
      // setShowToast(true);
      // throw error
      throw error;
    }
  };
  

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      try {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: input, sender: "user" },
        ]);

        if (currentUser) {
          setIsProcessing(true);
          setReport([]);
          const response = await fetch("http://localhost:8080/api/company-chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: input,
              companySymbol: companySymbol,
              mode: mode,
              userID: currentUser.uid,
            }),
          });
          const message = await response.json();
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: message.response, sender: "bot" },
          ]);
          setIsProcessing(false);

          const pattern = /(\d+\.\s*\*\*[^*]+?\*\*:)|(?:\*\*([^*]+?)\*\*:)|(?:\*\*([^*]+?)\*\*)/g;
          const formattedText = message.response.replace(pattern, formatBulletPoints);
          let paragraphs = formattedText.split('<br>');

          setReport(paragraphs);

        } else {
          console.log("user not logged in");
          throw new Error("User not logged in");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // useEffect(() => {
  //   fetchDataFromDatabase();
  // }, [companySymbol, currentUser]);

  return (
    <div>
      <Row className="pl-0" noGutters={true}>
        <Col className="pl-0" noGutters={true}>
          <form onSubmit={sendMessage} className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputField}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your thesis..."
            />
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </form>
        </Col>
      </Row>
      <Row className="pl-0" noGutters={true}>
        <Col xs={4} className="pl-0" noGutters={true}>
          <h4 className='mt-4'>Here is your generated report:</h4>
          {isProcessing && (
            <Row className="mb-3">
              <Col>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>{" "}
                Generating your report... This may take a minute.
              </Col>
            </Row>
          )}
          {/* <Row>
            <Col>
              {report.length !== 0 && <Button
                variant="custom"
                className="custom-outline-button"
                onClick={downloadAndUpload}
              >
                Download and Save
              </Button>}
            </Col>
          </Row> */}
        </Col>
      </Row>
      <Row>
        <Col>
          {report.length !== 0 && <Button
            variant="custom"
            className="custom-outline-button mt-2 mb-3"
            onClick={downloadAndUpload}
          >
            Download and Save
          </Button>}
        </Col>
      </Row>
      <Row className='pl-0' noGutters={true}>
        <Col className='pl-0' noGutters={true}>
          {report.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Col>
      </Row>
    </div>

  );
};

export default InvestmentCopilot;
