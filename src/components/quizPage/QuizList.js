import { useState } from 'react';
import '../../App.css';

const QuizList = ({question, setAggregateScore, aggregateScore, setButtonHidden, buttonPressed, setButtonPressed, answerButtonClicked, setAnswerButtonClicked, setTimer, timer, isAnswerCorrect, setIsAnswerCorrect, selectedAnswer, setSelectedAnswer
}) => {
  const returnQuestion = () => {
    return <h1 className='question'>{question.questionText}</h1>;
  };

  const handleAnswerButtonClick = (answer) => {
    if (answerButtonClicked === false && timer > 0) {
      setSelectedAnswer(answer);
      let isCorrect = false;

      if (answer === question.correctAnswer) {
        console.log('correctAnswer');
        setAggregateScore([...aggregateScore, 1]);
        setButtonHidden(null);
        console.log(aggregateScore);
        setAnswerButtonClicked(true);
        setTimer(0);
        setButtonPressed(true);
        isCorrect = true;
      } else {
        console.log('incorrectAnswer');
        setAggregateScore([...aggregateScore, 0]);
        setButtonHidden(null);
        console.log(aggregateScore);
        setAnswerButtonClicked(true);
        setTimer(0);
        setButtonPressed(true);
        isCorrect = false;
      }

      setIsAnswerCorrect(isCorrect);
    }
  };

  const returnAnswers = question.options.map((answer, index) => {
    const isSelected = selectedAnswer === answer; 
    let buttonClass = '';

    if (isSelected) {
      buttonClass = isAnswerCorrect ? 'correct' : 'incorrect';
    } else {
      buttonClass = '';
    }

    return (
      <button
        key={index}
        onClick={() => handleAnswerButtonClick(answer)}
        disabled={buttonPressed}
        className={buttonClass}
      >
        {answer}
      </button>
    );
  });

  return (
    <div className='quiz-body'>
      <div>{returnQuestion()}</div>
      <div className='answers'>{returnAnswers}</div>
    </div>
  );
};

export default QuizList;