import { useState } from "react"
import "../../App.css"

const Review = ({aggregateScore, previousQuestions}) => {

    
    const [displayScore, setDisplayScore] = useState([]);

    const changeScore = aggregateScore.map((score) => {
        if(score === 0){
            return(
                <div className="score">
                    <p>Incorrect</p>
                </div>
            ) 
        } else {
            return(
                <div className="score">
                    <p>Correct</p>
                </div>
            ) 
        }
    })

    const reviewQuestions = previousQuestions.map((question) => {
        return(
            <div className="questions-answer">
                <div className="final-page-question">
                    <p>{question.questionText}</p>
                </div>
                <div className="final-page-answer">
                    <p>{question.correctAnswer}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="review">
            <div className="questions">
                {reviewQuestions}
            </div>
            <div className="scores">
                {changeScore}
            </div>
        </div>
    )
}

export default Review;