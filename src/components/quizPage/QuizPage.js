import { useState } from "react";
import QuizList from "./QuizList";

const QuizPage = ({questions, setQuestions, aggregateScore, setAggregateScore, setPreviousQuestions, previousQuestions, timer}) => {

    const [currentQuestion, setCurrentQuestion] = ("");

    const [answerButtonClicked, setAnswerButtonClicked] = useState(false);

    const handleNextQuestionButton = () => {
        setPreviousQuestions([...previousQuestions, questions[0]]);
        const tempQuestions = questions.filter(item => item !== questions[0]);
        setQuestions(tempQuestions);
        setButtonHidden("hidden");
        setAnswerButtonClicked(false);
    }

    const [buttonHidden, setButtonHidden] = useState("hidden");

    return (
        <div>
           <QuizList 
           question={questions[0]}
           aggregateScore={aggregateScore}
           setAggregateScore={setAggregateScore}
           setButtonHidden={setButtonHidden}
           answerButtonClicked={answerButtonClicked}
           setAnswerButtonClicked={setAnswerButtonClicked}/> 
           <button onClick={() => handleNextQuestionButton()} hidden={buttonHidden}>Next Question</button>
        </div>
    );
}

export default QuizPage;