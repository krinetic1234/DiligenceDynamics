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
import "../styles/globals.css";

export default function Page() {
  const columns = [
    { header: "fileName", name: "File Name" },
    { header: "date", name: "Date Uploaded" },
    { header: "manual", name: "Manually Uploaded" },
    { header: "downloadURL", name: "Download" },
  ];
  const [companySymbol, setCompanySymbol] = useState("");
  const [tableData, setTableData] = useState([]);

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
      const manualRef = ref(companyRef, "manually_uploaded");
      const scrapedRef = ref(companyRef, "scraped");

      const firstPageManual = await list(manualRef, { maxResults: 20 });
      if (firstPageManual.nextPageToken) {
        const secondPage = await list(manualRef, {
          maxResults: 20,
          pageToken: firstPageManual.nextPageToken,
        });
      }

      const firstPageScraped = await list(scrapedRef, { maxResults: 20 });
      if (firstPageScraped.nextPageToken) {
        const secondPage = await list(scrapedRef, {
          maxResults: 20,
          pageToken: firstPageScraped.nextPageToken,
        });
      }

      const manualDataPromises = firstPageManual.items.map(async (itemRef) => {
        const metadata = await getMetadata(itemRef);
        return {
          fileName: metadata.name,
          date: metadata.updated, // You can use 'created' or 'updated' depending on your requirements
          downloadURL: await getDownloadURL(itemRef),
          manual: "yes",
        };
      });

      const manualData = await Promise.all(manualDataPromises);

      const scrapedDataPromises = firstPageScraped.items.map(
        async (itemRef) => {
          const metadata = await getMetadata(itemRef);
          return {
            fileName: metadata.name,
            date: metadata.updated, // You can use 'created' or 'updated' depending on your requirements
            downloadURL: await getDownloadURL(itemRef),
            manual: "no",
          };
        }
      );

      const scrapedData = await Promise.all(scrapedDataPromises);

      const companyFiles = manualData.concat(scrapedData);
      console.log("companyFiles:", companyFiles);
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
          {/* <ChatInterface companySymbol={companySymbol} ></ChatInterface> */}
        </Col>
      </Row>
    </Container>
  );
}
