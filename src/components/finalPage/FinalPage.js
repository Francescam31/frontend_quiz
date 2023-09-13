import FinalScore from "./FinalScore";
import Review from "./Review";
import { useState } from "react";
// import sum from "../quizPage/ProgressBar";

const FinalPage = ({aggregateScore, previousQuestions, username}) => {


    return (
        <div>
            <FinalScore aggregateScore={aggregateScore} username={username}/>
            <Review previousQuestions={previousQuestions} aggregateScore={aggregateScore}/>
            <a href="/"><button>Play Again</button></a>
        </div>
    );
}

export default FinalPage;