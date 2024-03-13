"use client";
import styles from '../styles/Sentiment.module.css';
import React, { useState } from 'react';

const SentimentPage = () => {
    const [companyName, setCompanyName] = useState('');
    const [newsSentiment, setNewsSentiment] = useState({fig_url: '', titles: []});
    const [redditSentiment, setRedditSentiment] = useState({fig_url: '', titles: []});

    const fetchSentimentData = async () => {
        if (companyName.trim() === '') return; // Prevent fetching if companyName is empty

        const newsResponse = await fetch(`/sentiment/news/${companyName}`);
        console.log("reached news");
        const newsData = await newsResponse.json();
        setNewsSentiment(newsData);

        const redditResponse = await fetch(`/sentiment/reddit/${companyName}`);
        console.log("reached reddit");
        const redditData = await redditResponse.json();
        setRedditSentiment(redditData);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    className={styles.inputField}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                />
                <button className={styles.fetchButton} onClick={fetchSentimentData}>Fetch Sentiment</button>
            </div>
            <div className={styles.sentimentSection}>
                <h2 className={styles.sentimentTitle}>News Sentiment</h2>
                <img src={newsSentiment.fig_url} alt="News Sentiment Figure" />
                <ul className={styles.sentimentList}>
                  {newsSentiment.titles.map((title, index) => (
                    <li key={index} className={styles.sentimentItem}>{title}</li>
                  ))}
                </ul>
            </div>
            <div className={styles.sentimentSection}>
                <h2 className={styles.sentimentTitle}>Reddit Sentiment</h2>
                <img src={redditSentiment.fig_url} alt="Reddit Sentiment Figure" />
                <ul className={styles.sentimentList}>
                  {redditSentiment.titles.map((title, index) => (
                    <li key={index} className={styles.sentimentItem}>{title}</li>
                  ))}
                </ul>
            </div>
        </div>
    );
}

export default SentimentPage;
