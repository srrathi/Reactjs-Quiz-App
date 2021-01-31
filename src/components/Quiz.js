import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

export const Quiz = () => {
    const [currQues, setCurrQues] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const { score, setScore, setGameState } = useContext(QuizContext);


    const nextQuestion = () => {
        if (Questions[currQues].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQues(currQues + 1)
        // alert(score)
    };

    const finishQuiz = ()=>{
        if (Questions[currQues].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
        
    }
    return (
        <div className="item-row">
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
                <button className="btn btn-info btn-finish" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                    <button className="btn btn-info pb" onClick={nextQuestion}>Next Question</button>
                )}

        </div>
    )
}
