import QuizList from "./QuizList";

const QuizPage = ({questions, aggregateScore, setAggregateScore, setPreviousQuestions, timer}) => {

    return (
        <div>
           <QuizList 
           question={questions[0]}
           aggregateScore={aggregateScore}
           setAggregateScore={setAggregateScore}/> 
        </div>
    );
}

export default QuizPage;