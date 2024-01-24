import React from 'react';
import styles from '../styles/DocumentUploader.module.css';

const DocumentUploader = () => {
  return (
    <div className={styles.uploaderContainer}>
      <input
        type="file"
        className={styles.fileInput}
        accept=".pdf,.doc,.docx,.txt"
      />
    </div>
  );
};

export default DocumentUploader;