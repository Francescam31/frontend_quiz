import FinalScore from "./FinalScore";
import Review from "./Review";
import { useState } from "react";
import "../../App.css"
// import sum from "../quizPage/ProgressBar";

const FinalPage = ({aggregateScore, previousQuestions, username}) => {


    return (
        <div className="final-page">
            <FinalScore aggregateScore={aggregateScore} username={username}/>
            <Review previousQuestions={previousQuestions} aggregateScore={aggregateScore}/>
            <div className="final-page-button">
                <a href="/"><button>Play Again</button></a>
            </div>
        </div>
    );
}

export default FinalPage;