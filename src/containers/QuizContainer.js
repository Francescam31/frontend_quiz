import { useEffect, useState } from "react";
import QuizPage from "../components/quizPage/QuizPage";
import FinalPage from "../components/finalPage/FinalPage";
import StartPage from "../components/startPage/StartPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const QuizContainer = ({questions, setQuestions, previousQuestions, setPreviousQuestions, timer, setTimer, aggregateScore, setAggregateScore}) => {

    // const [questions, setQuestions] = useState([]);
    // const [previousQuestions, setPreviousQuestions] = useState([]);
    // const [timer, setTimer] = useState(30);
    // const [aggregateScore, setAggregateScore] = useState([]);

    const fetchQuestions = async () => {
        const response = await fetch("http://localhost:8080/questions") ;
        const questionsData = await response.json();
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

    // if(questions.length === 0) {
    //     return (
    //         <h1>Questions loading...</h1>
    //     )
    // } else {
        return (
            <div>
                
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<StartPage />} key={1}/>
                            <Route path="/QuizPage" element={<QuizPage 
                            questions={questions} 
                            setQuestions={setQuestions}
                            setPreviousQuestions={setPreviousQuestions}
                            previousQuestions={previousQuestions}
                            timer={timer}
                            setTimer={setTimer}
                            aggregateScore={aggregateScore}
                            setAggregateScore={setAggregateScore}/>} key={2}/>
                        <Route path="/FinalPage" element={<FinalPage aggregateScore={aggregateScore} previousQuestions={previousQuestions}/>} key={3}/>
                    </Routes>
                </BrowserRouter>
                
            </div>
        );
    }

    
// }

export default QuizContainer;