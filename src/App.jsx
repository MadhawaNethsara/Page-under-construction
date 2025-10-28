import './App.css';
import React from 'react';
import backgroundImage from './assets/image3.jpg';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="flex flex-col items-center justify-start pt-10"
    >
      <div className="text-4xl font-bold text-white bg-black/50 p-6 rounded-2xl text-center">
        PAGE UNDER CONSTRUCTION!!!
      </div>
    </div>
  );
}

export default App;
