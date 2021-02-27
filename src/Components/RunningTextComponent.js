import React from 'react'

export default function RunningText({ setUserInput, userInput}) {

    const handleChange = e =>{
        setUserInput(e.target.value)
    }

    return (
        <div>
            <input 
                type="text"
                onChange={handleChange}
            />
            <h2>{userInput}</h2>
        </div>
    )
}
