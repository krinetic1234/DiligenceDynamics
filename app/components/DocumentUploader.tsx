import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';


const DocumentUploader = () => {
  
  return (
    <div className="mt-5 w50">
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" />
        {/* <label className="custom-file-label" htmlFor="customFile">
          Choose file
        </label> */}
      </div>
    </div>
  );
};

export default DocumentUploader;