"use client"
import React, { useEffect, useState } from 'react';

const SentimentPage = () => {
    const [newsSentiment, setNewsSentiment] = useState({fig_url: '', ai_response: ''});
    const [redditSentiment, setRedditSentiment] = useState({fig_url: '', ai_response: ''});

    const fetchSentimentData = async (companyName: string) => {
        const newsResponse = await fetch(`http://localhost:8080/api/sentiment/news/${companyName}`);
        const newsData = await newsResponse.json();
        setNewsSentiment(newsData);

        const redditResponse = await fetch(`http://localhost:8080/api/sentiment/reddit/${companyName}`);
        const redditData = await redditResponse.json();
        setRedditSentiment(redditData);
    };

    useEffect(() => {
        fetchSentimentData('Apple');
    }, []);

    return (
      <div>
        <div>
            <h2>News Sentiment</h2>
            <img src={newsSentiment.fig_url} alt="News Sentiment Figure" />
            <p>{newsSentiment.ai_response}</p>
        </div>
        <div>
            <h2>Reddit Sentiment</h2>
            <img src={redditSentiment.fig_url} alt="Reddit Sentiment Figure" />
            <p>{redditSentiment.ai_response}</p>
        </div>
      </div>
    );
}

export default SentimentPage;
