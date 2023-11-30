import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    // Fetch data from the API
    fetch(`${apiUrl}/api/greet`)
      .then((response) => response.json())
      .then((data) => {
        setGreeting(`Hello, ${data.username}!`);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;