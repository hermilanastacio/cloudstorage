import * as React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';

const Callback: React.FC = () => {
  const loadingImg = require('./assets/loading.gif');
  let history = useHistory();

  let code = new URLSearchParams(useLocation().search).get("code");

  let baseUrl = 'https://oauth2.googleapis.com/token';
  let grant_type = 'authorization_code';
    
  axios.post(`${baseUrl}?code=${code}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&grant_type=${grant_type}`)
  .then(res => {
    localStorage["GDRIVE_TOKEN"] = res.data.access_token;
    history.push('/dashboard');
  })
  .catch(err => console.log(err))

  return(
    <div style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={loadingImg} alt="loading"/>
    </div>
  );
};

export default Callback;
