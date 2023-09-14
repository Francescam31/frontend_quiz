import { useState } from "react";
import QuizList from "./QuizList";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const QuizPage = ({questions, setQuestions, aggregateScore, setAggregateScore, setPreviousQuestions, previousQuestions, timer, setTimer}) => {

    const [answerButtonClicked, setAnswerButtonClicked] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);
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
        setButtonPressed(false);
       
    }

    const [buttonHidden, setButtonHidden] = useState("hidden");

    const chooseButton = () => {
        if (previousQuestions.length === 9){
            return (
                <div>
                    <p hidden={buttonHidden} className="fact-box">{questions[0].fact}</p>
                    <div className="quiz-page-button"><Link to="/FinalPage"><button hidden={buttonHidden} onClick={() => handleNextQuestionButton()}>See Results</button></Link></div>
                </div>
            )
        } else {
            return (
                <div>
                    <p hidden={buttonHidden} className="fact-box">{questions[0].fact}</p>
                    <div className="quiz-page-button"><button onClick={() => handleNextQuestionButton()} hidden={buttonHidden}>Next Question</button></div>
                </div>
            )
            
        }
    }

    return (
        <div className="quiz-container">
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
            <div className="quiz-list-components">
                <QuizList 
                question={questions[0]}
                aggregateScore={aggregateScore}
                setAggregateScore={setAggregateScore}
                setButtonHidden={setButtonHidden}
                answerButtonClicked={answerButtonClicked}
                setAnswerButtonClicked={setAnswerButtonClicked}
                setTimer={setTimer}
                timer={timer}
                buttonPressed={buttonPressed}
                setButtonPressed={setButtonPressed}
                /> 
            </div>
           

           {chooseButton()}
        </div>
    );
}

export default QuizPage;