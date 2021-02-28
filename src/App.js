import React, { useState } from 'react';
import './App.css';
// Component imports
import RunningText from './Components/RunningTextComponent';

function App() {
  // setting up useState
  const [userInput, setUserInput] = useState('');
  const [userCaptures, setUserCaptures] = useState([]);

   

  return (
    <div 
      className="App App-header"
    >
      <RunningText 
        setUserInput={setUserInput}
        userInput={userInput}
        userCaptures={userCaptures}
        setUserCaptures={setUserCaptures}                
      />
    </div>
  );
}

export default App;
