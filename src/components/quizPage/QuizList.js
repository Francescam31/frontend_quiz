import '../../App.css';


const QuizList = ({question, setAggregateScore, aggregateScore, setButtonHidden}) => {

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
            setButtonHidden(null);
        } else {
            console.log('incorrectAnswer');
            setButtonHidden(null);
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