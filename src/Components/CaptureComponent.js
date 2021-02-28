import React from 'react'
import '../App.css';

export default function Capture({ setUserInput, userInput, userCaptures, setUserCaptures}) {

    const handleSubmit = e => {
        setUserCaptures([...userInput]);
        setUserInput('');
    }

    /* const displayCapture = userCaptures.map(capture => {
        return(
            <h3>{capture}</h3>
        );
    }); */

    /* output till need to be fixed in this component
       submit button need to clear the input field when clicked
    */ 

    return (
        <div className="row">
            <div className="col">
                <button
                    className="button"
                    type="button"
                    onClick={handleSubmit}
                >
                Capture Text
                </button>
            </div>
            <div className="col">
                <h3>List Captured Text</h3>
            </div>
            <div className="col">
                <h3>{userCaptures}</h3>
            </div>            
        </div>
    )
}
