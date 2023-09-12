import QuizList from "./QuizList";

const QuizPage = ({questions, aggregateScore, setAggregateScore, setPreviousQuestions, timer}) => {

    const [currentQuestion, setCurrentQuestion] = ("");

    // const randomizeQuestion = () => {
    //     if(questions.length !== 0){
    //         let maximumNumberOfQuestions = questions.
    //     }
    // }

    return (
        <div>
           <QuizList 
           question={questions[0]}
           aggregateScore={aggregateScore}
           setAggregateScore={setAggregateScore}/> 
           <button>Next Question</button>
        </div>
    );
}

export default QuizPage;