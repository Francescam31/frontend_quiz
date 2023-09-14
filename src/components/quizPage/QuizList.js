import { useState } from 'react';
import '../../App.css';


const QuizList = ({question, setAggregateScore, aggregateScore, setButtonHidden, buttonPressed, setButtonPressed, answerButtonClicked, setAnswerButtonClicked, setTimer, timer}) => {

    

    const returnQuestion = () => {
        return <h1 className='question'>{question.questionText}</h1>
    }

    const handleAnswerButtonClick = (answer) => {
        if (answerButtonClicked === false && timer>0) {
            if (answer === question.correctAnswer) {
                console.log('correctAnswer');
                setAggregateScore([...aggregateScore,1])
                setButtonHidden(null);
                console.log(aggregateScore);
                setAnswerButtonClicked(true);
                setTimer(0);
                setButtonPressed(true)
            } else{
                console.log('incorrectAnswer');
                setAggregateScore([...aggregateScore,0])
                setButtonHidden(null);
                console.log(aggregateScore);
                setAnswerButtonClicked(true);
                setTimer(0);
                setButtonPressed(true)
            } 
        }   
        // figure out how to enter a 0 value to null
    }

    const returnAnswers = question.options.map((answer, index) => {
        return  <button key={index} onClick={() => handleAnswerButtonClick(answer)} disabled={buttonPressed} >{answer}</button>
    }) 
    

    return (
        <div className='quiz-body'>
            <div >
                {returnQuestion()}
            </div>
            <div className='answers'>
                {returnAnswers}
            </div>
        </div>
    );
}

export default QuizList;