import React, { useState, useEffect } from "react";
import nasdaq_map from "../nasdaq_map.json";

const NewsList = ({ companyData }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const news_api_key = "9f1600c19aa14fa2b270ebc898d6efc6"; // News API Key
  const symbol = companyData.ticker;
  let companyName =
    nasdaq_map[symbol]?.replace(",", "").replace("Inc.", "") || "";

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      companyName
    )}&from=${
      date.toISOString().split("T")[0]
    }&language=en&sortBy=relevancy&apiKey=${news_api_key}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
          // let sorted_articles_by_company_relevance = data.articles.sort((a, b) => {
          //   return (
          //     b.title.includes(companyName) - a.title.includes(companyName)
          //   );
          // });
          // console.log('sorted_articles_by_company_relevance:', sorted_articles_by_company_relevance);
          // setNews(sorted_articles_by_company_relevance);
          setNews(data.articles);
        } else {
          setError(data.message || "Failed to fetch news");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [companyData]);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!news.length) {
    return <div>No news found for {companyName}.</div>;
  }

  return (
    <div style={{ paddingTop: 30 }}>
      <h2>Latest News for {companyName}</h2>
      <ul style={{ textAlign: "left" }}>
        {news.slice(0, 5).map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h5>{article.title}</h5>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
