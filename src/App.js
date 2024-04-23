import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="body-container">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
