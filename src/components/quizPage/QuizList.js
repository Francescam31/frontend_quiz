import { useState } from 'react';
import '../../App.css';


const QuizList = ({question, setAggregateScore, aggregateScore, setButtonHidden, answerButtonClicked, setAnswerButtonClicked}) => {

    const returnQuestion = () => {
        return <h1>{question.questionText}</h1>
    }

    const handleAnswerButtonClick = (answer) => {
        if (answerButtonClicked === false) {
            if (answer === question.correctAnswer) {
                console.log('correctAnswer');
                setAggregateScore([...aggregateScore,1])
                setButtonHidden(null);
                console.log(aggregateScore);
                setAnswerButtonClicked(true);
            } else {
                console.log('incorrectAnswer');
                setAggregateScore([...aggregateScore,0])
                setButtonHidden(null);
                console.log(aggregateScore);
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