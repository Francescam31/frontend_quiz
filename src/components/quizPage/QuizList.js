import Question from "./Question";
import Answer from "./Answer";

const QuizList = ({question, setAggregateScore, aggregateScore}) => {

    // const handleButtonClick = () => {
    //     if (answerButton.value === question.correctAnswer) {
    //         setAggregateScore(aggregateScore + 1)
    //     }
    // }

    const returnQuestion = () => {
        return <h1>{question.questionText}</h1>
    }

    const returnAnswers = question.options.map((answer) => {
        return <button>{answer}</button>
    })

    return (
        <div>
            {returnQuestion()}
            {/* <button key={question.id} value={question.options[0]}>{question.options[0]}</button>
            <button key={question.id} value={question.options[1]}>{question.options[1]}</button>
            <button key={question.id} value={question.options[2]}>{question.options[2]}</button> */}
            {returnAnswers}
        </div>
    );
}

export default QuizList;