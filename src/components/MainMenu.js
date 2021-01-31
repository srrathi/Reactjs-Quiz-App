import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Contexts'

export const MainMenu = () => {
    const {setGameState, setName} = useContext(QuizContext);
    const [input,setInput]=useState("");
    const setInputText = (e)=>{
        setInput(e.target.value);
    }
    return (
        <div className="menu">
            <input onChange={setInputText} placeholder="Enter your Name"></input>
            <button className="btn btn-info btn-lg" onClick={()=>{setGameState("quiz"); setName(input)}}>Start Quiz</button>
        </div>
    )
}
