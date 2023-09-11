import Question from "./Question";
import Answer from "./Answer";

const QuizList = ({question, setAggregateScore, aggregateScore}) => {

    const handleButtonClick = () => {
        if (answerButton.value === question.correctAnswer) {
            setAggregateScore(aggregateScore + 1)
        }
    }

    return (
        <div>
            <h1>{question.questionText}</h1>
            <button id="answerButton" onClick={handleButtonClick} value={question.option[0]}>{question.options[0]}</button>
            <button id="answerButton" onClick={handleButtonClick} value={question.option[1]}>{question.options[1]}</button>
            <button id="answerButton" onClick={handleButtonClick} value={question.option[2]}>{question.options[2]}</button>
        </div>
    );
}

export default QuizList;