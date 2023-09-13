import '../../App.css'
import { useEffect } from 'react';

const ProgressBar = ({previousQuestions, aggregateScore, timer, setTimer, setButtonHidden, setAggregateScore}) => {

    let sum = 0;

    if(aggregateScore.length > 0) {
        for(let i = 0; i < aggregateScore.length; i++) {
        sum = sum + aggregateScore[i];
    }} else {
        sum = 0;
    } 

    

    useEffect(() => {
        if (timer === 0) {
            setButtonHidden(null)
        }
        const countDown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countDown);
      }, [timer]);

    return (
        <div>
            <p>Question: {previousQuestions.length + 1} of 10</p>
            <p>Score: {sum}</p>
            <p>{timer}</p>
            
        </div>
    );
}

export default ProgressBar;