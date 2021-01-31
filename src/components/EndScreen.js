import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'
import { db } from './Firebase';

export const EndScreen = () => {
    const { score, setScore, setGameState, name } = useContext(QuizContext)
    var dataRef = db.ref('Data');

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
    const sendData = () => {
        var newDataRef = dataRef.push();
        // var time = new Date();
        newDataRef.set({
            "name": name,
            "score": score,
            "time": Date().toLocaleString(),
        });
    }
    useEffect(() => sendData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    return (
        <div className="item-row">
            <h1 className="end">Quiz Finished</h1>
            <h2 className="btn btn-info name">Hello {name}</h2>
            <h3 className="end">Your Score is {score}/{Questions.length}</h3>
            <button className="btn btn-info btn-finish" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
