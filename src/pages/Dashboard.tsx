import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IFile } from '../common/interfaces';

const Dashboard: React.FC = () => {
  const [file, setFile] = useState<Array<IFile>>();

  const imgStyle = {
    height: 25,
    width: 25,
    marginRight: 10
  }
  
  useEffect(() => {
    axios.get('https://www.googleapis.com/drive/v3/files?fields=*', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("GDRIVE_TOKEN")}`
      }
    })
    .then(res => {
      setFile(res.data.files)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  },[]);

  return(
    <div className="App">
      {file && file.map(f => {
        return(
          <div 
          style={{
            padding:"15px 10px",
            borderBottom: "1px solid gray",
            display:"flex",
            alignItems:"center"
          }}
          key={f.id}>
            <img style={imgStyle} src={f.iconLink} alt="thumbnail"/>
            <span>{f.name}</span>
          </div>
        )
      })}
    </div>
  );
};

export default Dashboard;
