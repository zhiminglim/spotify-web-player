import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    console.log("[App] useEffect...")
    async function getToken() {
      const response = await fetch('/auth/token');

      console.log("[App] response: ");
      console.log(response);
      const json = await response.json();
      console.log("[App] json: ");
      console.log(json);
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}


export default App;
