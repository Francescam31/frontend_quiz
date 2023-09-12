import { useState } from "react"

const Review = ({aggregateScore, previousQuestions}) => {

    // const reviewQuestions = () => {
    //     for (let i = 0 ; i<previousQuestions.length ; i++){
    //         <li>{previousQuestions[i].questionText} , {previousQuestions[i].correctAnswer}, {aggregateScore[i]}</li>
    //     }
        
    // }
    // const [displayScore, setDisplayScore] = useState([]);
    // for(let i = 0; i<10; i++){
    //     if(aggregateScore[i] === 0){
    //         setDisplayScore([...displayScore,"Incorrect"])
    //     } else {
    //         setDisplayScore([...displayScore,"Correct"]) 
    //     }
    // }

    const reviewQuestions = previousQuestions.map((question,index) => {
        return <li>{question.questionText} , {question.correctAnswer}</li>
    })

    return(
        <div>
            <ul>
                {reviewQuestions}
            </ul>
        </div>
    )
}

export default Review;