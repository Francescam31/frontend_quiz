import { useState } from "react";
import QuizList from "./QuizList";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const QuizPage = ({questions, setQuestions, aggregateScore, setAggregateScore, setPreviousQuestions, previousQuestions, timer, setTimer}) => {

    const [answerButtonClicked, setAnswerButtonClicked] = useState(false);
    const [timeoutId, setTimeoutId] = useState()

    const handleNextQuestionButton = () => {
        if(!answerButtonClicked){
            setAggregateScore([...aggregateScore,0])
        }
        setPreviousQuestions([...previousQuestions, questions[0]]);
        const tempQuestions = questions.filter(item => item !== questions[0]);
        setQuestions(tempQuestions);
        setButtonHidden("hidden");
        setAnswerButtonClicked(false);
        setTimer(30);
       
    }

    const [buttonHidden, setButtonHidden] = useState("hidden");

    const chooseButton = () => {
        if (previousQuestions.length === 9){
            return <Link to="/FinalPage"><button hidden={buttonHidden} onClick={() => handleNextQuestionButton()}>See Results</button></Link>
        } else {
            return <button onClick={() => handleNextQuestionButton()} hidden={buttonHidden}>Next Question</button>
        }
    }

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
            setButtonHidden={setButtonHidden}
            
            />
           <QuizList 
           question={questions[0]}
           aggregateScore={aggregateScore}
           setAggregateScore={setAggregateScore}
           setButtonHidden={setButtonHidden}
           answerButtonClicked={answerButtonClicked}
           setAnswerButtonClicked={setAnswerButtonClicked}
           setTimer={setTimer}
           timer={timer}
           /> 
           {chooseButton()}
        </div>
    );
}

export default QuizPage;