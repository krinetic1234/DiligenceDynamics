"use client";
import styles from '../styles/ExcelNLP.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

const NLPPage = () => {
    const [prompt, setPrompt] = useState('');
    const [graphData, setGraphData] = useState({fig_url: ''});
    const [excelData, setExcelData] = useState([]);

    const fetchNLPData = async () => {
        if (prompt.trim() === '') return;

        const nlpResponse = await fetch(`http://localhost:8080/api/nlp/${prompt}`);
        console.log("Processing NLP");
        const nlpData = await nlpResponse.json();
        console.log(nlpData);
        setGraphData({ fig_url: nlpData.graphUrl });
        setExcelData(nlpData.excelData);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    className={styles.inputField}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter a prompt for NLP processing"
                />
                <button className={styles.actionButton} onClick={fetchNLPData}>Process Prompt</button>
            </div>
            {graphData.fig_url && (
                <div className={styles.resultSection}>
                    <h2 className={styles.resultTitle}>Generated Graph</h2>
                    <Image src={graphData.fig_url} alt="Generated Graph" width={1000} height={600} />
                </div>
            )}
            {excelData.length > 0 && (
                <div className={styles.resultSection}>
                    <h2 className={styles.resultTitle}>Excel Data</h2>
                    <ul className={styles.dataList}>
                        {excelData.map((item, index) => (
                            <li key={index} className={styles.dataItem}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NLPPage;
