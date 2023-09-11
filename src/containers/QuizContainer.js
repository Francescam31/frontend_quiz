import { useEffect, useState } from "react";

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

        </div>
    );
}

export default QuizContainer;