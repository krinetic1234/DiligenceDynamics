import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import nasdaq_map from "../nasdaq_map.json";
import styles from '../styles/Carousel.module.css'; 


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
    }&language=en&sortBy=popularity&apiKey=${news_api_key}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
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
    <div className={styles.carousel}>
      <h2>Latest News for {companyName}</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        statusFormatter={(current, total) => `${current} of ${total}`}
        className={styles.carousel}
        showStatus={false} // Remove default status to use custom style
        showThumbs={false} // Remove thumbnails if not needed
       >
        {news.slice(0, 5).map((article, index) => (
          <div key={index} className={styles.carouselItem}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h5>{article.title}</h5>
            </a>
            <p>{article.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default NewsList;
