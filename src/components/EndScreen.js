import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'
export const EndScreen = () => {
    const { score, setScore, setGameState, name }=useContext(QuizContext)
    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="item-row">
            <h1 className="end">Quiz Finished</h1>
            <h2 className="btn btn-info name">Hello {name}</h2>
            <h3 className="end">Your Score is {score}/{Questions.length}</h3>
            <button className="btn btn-info btn-finish" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
