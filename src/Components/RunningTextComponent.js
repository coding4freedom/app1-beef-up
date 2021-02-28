import React from 'react'
import '../App.css';
// import Components
import Capture from './CaptureComponent';


export default function RunningText({ setUserInput, userInput, userCaptures, setUserCaptures}) {

    const handleChange = e =>{
        setUserInput(e.target.value);
    }

    return (
        <div className="container dash-board">
            <div className="row">
                <div className="col">
                    <h3>Enter Text Here!</h3>
                </div>
                <div className="col-12">
                    <input 
                        type="text"
                        onChange={handleChange}
                    />                    
                </div>
                <div className="col">
                    <h3>Output (Live Typing)</h3>
                </div>
                <div className="col">
                    <h4>{userInput}</h4>
                </div>                
            </div>
            <hr className="divider"/>
            <Capture
                setUserInput={setUserInput}
                userInput={userInput}
                userCaptures={userCaptures}
                setUserCaptures={setUserCaptures} 
            />
        </div>
    )
}
