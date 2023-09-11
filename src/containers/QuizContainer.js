import { useEffect, useState } from "react";
import QuizPage from "../components/quizPage/QuizPage";

const QuizContainer = () => {

    const [questions, setQuestions] = useState([]);
    const [previousQuestions, setPreviousQuestions] = useState([]);
    const [timer, setTimer] = useState(30);
    const [aggregateScore, setAggregateScore] = useState(0);

    const fetchQuestions = async () => {
        const response = await fetch("http://localhost:8080/questions") ;
        const questionsData = await response.json();
        setQuestions(questionsData);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            <QuizPage 
            questions={questions} 
            setPreviousQuestions={setPreviousQuestions}
            timer={timer}
            aggregateScore={aggregateScore}
            setAggregateScore={setAggregateScore}/>
        </div>
    );
}

export default QuizContainer;