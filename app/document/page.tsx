"use client";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import DocumentUploader from "../components/DocumentUploader";
import CompanyPicker from "../components/CompanyPicker";
import Table from "../components/Table";
import ChatInterface from "../components/ChatInterface";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "../firebase/firebaseConfig";
import { ref, list, getDownloadURL, getMetadata } from "firebase/storage";
import { FcDocument } from "react-icons/fc";
import { useAuth } from '../contexts/AuthContext';
import "../styles/globals.css";

export default function Page() {
  const columns = [
    { header: "fileName", name: "File Name" },
    { header: "date", name: "Date Uploaded" },
    { header: "manual", name: "Manually Uploaded" },
    { header: "downloadURL", name: "Download" },
  ];
  const mode = "document";
  const [companySymbol, setCompanySymbol] = useState("");
  const [tableData, setTableData] = useState([]);
  const { currentUser } = useAuth();

  const downloadButton = (rowData) => {
    const handleDownload = async () => {
      try {
        const response = await fetch(rowData.downloadURL);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", rowData.fileName);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading the document:", error);
        // Handle error as needed
      }
    };

    return (
      <div>
        <span
          onClick={handleDownload}
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          <FcDocument size={35} />
        </span>
      </div>
    );
  };

  const customColumns = {
    downloadURL: downloadButton,
  };

  const fetchFiles = async () => {
    try {
      const companyRef = ref(storage, `companies/${companySymbol}`);
      
      const firstPageCompanyFiles = await list(companyRef, { maxResults: 20 });
      if (firstPageCompanyFiles.nextPageToken) {
        const secondPage = await list(companyRef, {
          maxResults: 20,
          pageToken: firstPageCompanyFiles.nextPageToken,
        });
      }

      const companyFilesPromises = firstPageCompanyFiles.items.map(async (itemRef) => {
        const metadata = await getMetadata(itemRef);
        return {
          fileName: metadata.name,
          date: metadata.timeCreated, // You can use 'created' or 'updated' depending on your requirements
          downloadURL: await getDownloadURL(itemRef),
          manual: metadata.customMetadata && metadata.customMetadata.isManual,
          userId: metadata.customMetadata && metadata.customMetadata.userId,
        };
      });

      const companyData = await Promise.all(companyFilesPromises);      
      const companyFiles = companyData.filter((file) => file.userId === currentUser.uid);
      setTableData(companyFiles);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    if (companySymbol) {
      fetchFiles();
    }
  }, [companySymbol]);

  return (
    <Container fluid className="page-container">
      <Row>
        <Col>
          <h1 className="pt-5 pb-2">Company Documents</h1>
          <CompanyPicker
            companySymbol={companySymbol}
            setCompanySymbol={setCompanySymbol}
          />
          <DocumentUploader
            companySymbol={companySymbol}
            onUploadSuccess={fetchFiles}
          />
          <Table
            tableProps={{ bordered: true }}
            tableCols={columns}
            tableData={tableData}
            customColumns={customColumns}
          />
          {/* <ChatInterface
            companySymbol={companySymbol}
            mode={mode}
          ></ChatInterface> */}
        </Col>
      </Row>
    </Container>
  );
}
