import React from 'react';
import './App.css';

const generateAuthUrl = () => {
  let baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  let scope = 'https%3A//www.googleapis.com/auth/drive.metadata.readonly';
  let access_type = 'offline';
  let response_type = 'code';

  return `${baseUrl}?scope=${scope}&access_type=${access_type}&response_type=${response_type}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_id=${process.env.REACT_APP_CLIENT_ID}`
}

function App() {
  return (
    <div 
      className="App" 
      style={{
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
      }}
    >
      <a
        href={generateAuthUrl()}
        style={{backgroundColor:"blue", color:"white"}}
      >
        Authenticate
      </a>
    </div>
  );
}

export default App;
