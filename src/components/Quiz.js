import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import Timer from './Timer';

export const Quiz = () => {
    const [currQues, setCurrQues] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const { score, setScore, setGameState } = useContext(QuizContext);
    // var dataRef = db.ref('Data');

    const nextQuestion = () => {
        if (Questions[currQues].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQues(currQues + 1)
        // alert(score)
    };

    const finishQuiz = () => {
        if (Questions[currQues].answer === optionChosen) {
            setScore(score + 1);
        }
        // sendData();
        setGameState("endScreen");
    }
    // const sendData = () =>{
    //     var newDataRef = dataRef.push();
    //     newDataRef.set({
    //         "name": name,
    //         "score": score,
    //     });
    // }
    return (
        <div className="item-row">
            <Timer></Timer>
            <h2 className="ques">{Questions[currQues].prompt}</h2>
            
            <div className="options">
                <button className="btn btn-sm btn-info" onClick={() => setOptionChosen("A")}>
                    {Questions[currQues].optionA}
                </button>
                <button className="btn btn-sm btn-info" onClick={() => setOptionChosen("B")}>
                    {Questions[currQues].optionB}
                </button>
                <button className="btn btn-sm btn-info" onClick={() => setOptionChosen("C")}>
                    {Questions[currQues].optionC}
                </button>
                <button className="btn btn-sm btn-info" onClick={() => setOptionChosen("D")}>
                    {Questions[currQues].optionD}
                </button>
            </div>
            {currQues === Questions.length - 1 ? (
                <button className="btn btn-info btn-finish" onClick={() => { finishQuiz(); }}>Finish Quiz</button>
            ) : (
                    <button className="btn btn-info pb" onClick={nextQuestion}>Next Question</button>
                )}
            <br /><br />
            <div className="panel row">
                <h3 className="ques col-sm-12 col-xs-12">Questions Panel</h3>
                <div className="btn-div">
                    {Questions.map(option => {
                        return (<button className="btn-warning" onClick={() => setCurrQues(Questions.indexOf(option))}>Question {Questions.indexOf(option) + 1}</button>)
                    })}
                </div>
            </div>

        </div>
    )
}
