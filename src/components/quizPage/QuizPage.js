import { useState } from "react";
import QuizList from "./QuizList";
import ProgressBar from "./ProgressBar";

const QuizPage = ({questions, setQuestions, aggregateScore, setAggregateScore, setPreviousQuestions, previousQuestions, timer, setTimer}) => {

    const [currentQuestion, setCurrentQuestion] = ("");

    const [answerButtonClicked, setAnswerButtonClicked] = useState(false);
    const [timeoutId, setTimeoutId] = useState()

    const handleNextQuestionButton = () => {
        setPreviousQuestions([...previousQuestions, questions[0]]);
        const tempQuestions = questions.filter(item => item !== questions[0]);
        setQuestions(tempQuestions);
        setButtonHidden("hidden");
        setAnswerButtonClicked(false);
        setTimer(30);
       
    }

    const [buttonHidden, setButtonHidden] = useState("hidden");

    return (
        <div>
            <ProgressBar 
            previousQuestions={previousQuestions}
            aggregateScore={aggregateScore}
            setAggregateScore={setAggregateScore}
            timer={timer}
            setTimer={setTimer}
            setTimeoutId={setTimeoutId}
            timeoutId={timeoutId}
            />
           <QuizList 
           question={questions[0]}
           aggregateScore={aggregateScore}
           setAggregateScore={setAggregateScore}
           setButtonHidden={setButtonHidden}
           answerButtonClicked={answerButtonClicked}
           setAnswerButtonClicked={setAnswerButtonClicked}
           setTimer={setTimer}
           /> 
           <button onClick={() => handleNextQuestionButton()} hidden={buttonHidden}>Next Question</button>
        </div>
    );
}

export default QuizPage;