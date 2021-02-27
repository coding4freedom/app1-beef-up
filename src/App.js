import React, { useState } from 'react';
import './App.css';
// Component imports
import RunningText from './Components/RunningTextComponent';

function App() {
  // setting up useState
  const [userInput, setUserInput] = useState('');

   

  return (
    <div className="App">
      <RunningText 
        setUserInput={setUserInput}
        userInput={userInput}        
      />
    </div>
  );
}

export default App;
