import './App.css';
import QuizContainer from './containers/QuizContainer';
import { useState } from 'react';

function App() {

    const [questions, setQuestions] = useState([]);
    const [previousQuestions, setPreviousQuestions] = useState([]);
    const [timer, setTimer] = useState(30);
    const [aggregateScore, setAggregateScore] = useState([]); 

  return (
    <>
    <QuizContainer 
    questions={questions}
    setQuestions={setQuestions}
    previousQuestions={previousQuestions}
    setPreviousQuestions={setPreviousQuestions}
    timer={timer}
    setTimer={setTimer}
    aggregateScore={aggregateScore}
    setAggregateScore={setAggregateScore}/>
    </>
  );

 
}

export default App;
