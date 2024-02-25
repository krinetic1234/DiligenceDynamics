// ./app/page.tsx
"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";
import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import moment from "moment-timezone";
// import Search from "./components/Search";
import NewsList from "../../components/NewsList";
import FinanceChart from "../../components/FinanceChart";
import ChatInterface from "../../components/ChatInterface";
import DatePicker from "react-datepicker/dist/react-datepicker";
import nasdaq_map from "../../nasdaq_map.json";

const CompanySearch = ({ params }: { params: { id: string } }) => {
	moment.tz.setDefault("America/New_York");
  const [companyData, setCompanyData] = React.useState(null);
	// const [query, setQuery] = React.useState("");
	const [stockDiff, setStockDiff] = React.useState(0);
  const [fullDiff, setFullDiff] = React.useState(0);
  const api_key = "yDtGVD0KnJPgdFurSVspS5eHyreyLBUS"; // API key for Polygon AI
  const [startDate, setStartDate] = React.useState(
    new Date(Date.now() - 92 * 86400000) // 24 * 60 * 60 * 1000
  );
  const [endDate, setEndDate] = React.useState(new Date());
	const [errorFetching, setErrorFetching] = React.useState(null);

	const handleSearch = async (input) => {
    try {
			console.log('hey 1');
			console.log('input:', input);
      let query = input;
			// setQuery(input);
			console.log('query:', query);
      // if (query === "") {
      //   setCompanyData(null);
      // } else {
			console.log('hey 2');
			const start = startDate.toISOString().split("T")[0];
			const end = endDate.toISOString().split("T")[0];
			console.log('query', query.toUpperCase());
			const response = await fetch(
				`https://api.polygon.io/v2/aggs/ticker/${query.toUpperCase()}/range/1/day/${start}/${end}?adjusted=true&sort=asc&limit=120&apiKey=${api_key}`
			);
			const data = await response.json();
			if (data.results.length > 1) {
				const currentClose = data.results[data.results.length - 1].c;
				const prevClose = data.results[data.results.length - 2].c;
				const earliestClose = data.results[0].c;

				let diff = (currentClose / prevClose - 1) * 100;
				let fullDiff = (currentClose / earliestClose - 1) * 100;
				setStockDiff(diff);
				setFullDiff(fullDiff);
        setCompanyData(data);
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyData(null);
			setErrorFetching(error);
    }
  };

	useEffect(() => {
		console.log('params.id', params.id);
		handleSearch(params.id);
	}, [params.id]);

  return (
    <Container className="text-center mt-5 landing">
      {/* <div style={{ marginTop: 50, paddingBottom: 50 }}>
        <h1>Welcome to DiligenceDynamics</h1>
        <p>Search for a company to get started</p>
      </div> */}
      {/* <Search companyData={companyData} setCompanyData={setCompanyData} /> */}
			<Row>
				{companyData && companyData.results ? (
					<div>
						<h1>
							{nasdaq_map[companyData.ticker]}{" "}
							<span className="h1">(NASDAQ:{companyData.ticker})</span>
						</h1>
					</div>
				) : (
					<div>
						{errorFetching ? <h2>Company not found. Please verify the company ticker or search for a different company.</h2> : null}
						{/* can add a spinner here instead of saying null*/}
					</div>
				)}
			</Row>
      <Accordion className="max-width" defaultActiveKey={['0']} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Company Overview</Accordion.Header>
					<Accordion.Body>
						{ companyData && companyData.results ? (
							<Row>
								<Col>
									<div>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												borderBottom: "0px solid #000",
											}}
										>
											{/* <h4>
												{nasdaq_map[companyData.ticker]}{" "}
												<span className="h5">(NASDAQ:{companyData.ticker})</span>
											</h4> */}
											{/* <div>
												{stockDiff > 0 ? (
													<span className="h5" style={{ color: "green" }}>
														↑ {stockDiff.toFixed(2)}% Today
													</span>
												) : (
													<span className="h5" style={{ color: "red" }}>
														↓ {stockDiff.toFixed(2)}% Today
													</span>
												)}
											</div> */}
										</div>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											<h2 style={{ textAlign: "left" }}>
												${companyData.results[companyData.results.length - 1].c}
											</h2>
											<div>
												{stockDiff > 0 ? (
													<span className="h5" style={{ color: "green" }}>
														↑ {stockDiff.toFixed(2)}% Today
													</span>
												) : (
													<span className="h5" style={{ color: "red" }}>
														↓ {stockDiff.toFixed(2)}% Today
													</span>
												)}
											</div>
											<div>
												{fullDiff > 0 ? (
													<span className="h5" style={{ color: "green" }}>
														↑ {fullDiff.toFixed(2)}% from start date
													</span>
												) : (
													<span className="h5" style={{ color: "red" }}>
														↓ {fullDiff.toFixed(2)}% from start date
													</span>
												)}
											</div>
										</div>
									</div>
									{companyData ? <FinanceChart companyData={companyData} /> : null}
									<div className="datepicker" style={{ flexDirection: "row" }}>
										<p style={{ marginRight: 15 }}>Start date:</p>
										<DatePicker
											selected={startDate}
											onChange={(date) => {
												setStartDate(date);
											}}
											dateFormat="yyyy-MM-dd"
											maxDate={new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)}
											showYearDropdown
										/>

										<p style={{ marginLeft: 30, marginRight: 15 }}>End date:</p>
										<DatePicker
											selected={endDate}
											onChange={(date) => setEndDate(date)}
											dateFormat="yyyy-MM-dd"
											maxDate={new Date()}
											showYearDropdown
										/>
									</div>
								</Col>
								<Col>
									{companyData ? <NewsList companyData={companyData} /> : null}
								</Col>
							</Row>
						) : null}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Chat about this company</Accordion.Header>
					<Accordion.Body>
						{companyData ? <ChatInterface /> : null}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			
			{/* <Row>
				{companyData ? <ChatInterface /> : null}
			</Row> */}
      
    </Container>
  );
};

export default CompanySearch;
