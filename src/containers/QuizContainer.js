import { useEffect, useState } from "react";
import QuizPage from "../components/quizPage/QuizPage";

const QuizContainer = () => {

    const [questions, setQuestions] = useState([]);
    const [previousQuestions, setPreviousQuestions] = useState([]);
    const [timer, setTimer] = useState(30);
    const [aggregateScore, setAggregateScore] = useState(0);
    // const [shuffledList, setShuffledList] = useState([]);

    const fetchQuestions = async () => {
        const response = await fetch("http://localhost:8080/questions") ;
        const questionsData = await response.json();
        // setShuffledList(shuffledArray(questionsData));
        const shuffledQuestions = shuffleArray(questionsData);
        setQuestions(shuffledQuestions);
    }

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    useEffect(() => {
        fetchQuestions();
    },[]);

    if(questions.length === 0) {
        return (
            <h1>Questions loading...</h1>
        )
    } else {
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

    
}

export default QuizContainer;