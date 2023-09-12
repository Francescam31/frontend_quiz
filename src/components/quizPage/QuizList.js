import { useState } from 'react';
import '../../App.css';


const QuizList = ({question, setAggregateScore, aggregateScore, setButtonHidden, answerButtonClicked, setAnswerButtonClicked}) => {

    // const handleButtonClick = () => {ss
    //     if (answerButton.value === question.correctAnswer) {
    //         setAggregateScore(aggregateScore + 1)
    //     }
    // }

    const returnQuestion = () => {
        return <h1>{question.questionText}</h1>
    }

    const handleAnswerButtonClick = (answer) => {
        if (answerButtonClicked === false) {
            if (answer === question.correctAnswer) {
                console.log('correctAnswer');
                setButtonHidden(null);
                setAnswerButtonClicked(true);
            } else {
                console.log('incorrectAnswer');
                setButtonHidden(null);
                setAnswerButtonClicked(true);
            }
        }
        
    }



    const returnAnswers = question.options.map((answer, index) => {
        return  <button key={index} onClick={() => handleAnswerButtonClick(answer)} cli>{answer}</button>
    }) 
    

    return (
        <div className='quiz-body'>
            {returnQuestion()}
            {returnAnswers}
        </div>
    );
}

export default QuizList;