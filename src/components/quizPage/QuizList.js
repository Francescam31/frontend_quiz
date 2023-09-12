import '../../App.css';


const QuizList = ({question, setAggregateScore, aggregateScore}) => {

    // const handleButtonClick = () => {
    //     if (answerButton.value === question.correctAnswer) {
    //         setAggregateScore(aggregateScore + 1)
    //     }
    // }

    const returnQuestion = () => {
        return <h1>{question.questionText}</h1>
    }

    const handleAnswerButtonClick = (answer) => {
        if (answer === question.correctAnswer) {
            console.log('correctAnswer');
        } else {
            console.log('incorrectAnswer');
        }
    }

    const returnAnswers = question.options.map((answer, index) => {
        return  <button key={index} onClick={() => handleAnswerButtonClick(answer)}>{answer}</button>
    }) 
    

    return (
        <div className='quiz-body'>
            {returnQuestion()}
            {returnAnswers}
        </div>
    );
}

export default QuizList;