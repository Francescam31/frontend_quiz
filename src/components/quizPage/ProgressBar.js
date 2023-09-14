import '../../App.css'
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProgressBar = ({previousQuestions, aggregateScore, timer, setTimer, setButtonHidden, setAggregateScore}) => {

    let sum = 0;
    const [colour, setColour] = useState("green");

    if(aggregateScore.length > 0) {
        for(let i = 0; i < aggregateScore.length; i++) {
        sum = sum + aggregateScore[i];
    }} else {
        sum = 0;
    } 

    

    useEffect(() => {
        if(timer > 15){
            setColour("green")
          } else if ( timer >7 && timer<=15) {
            setColour("orange")
          } else {
            setColour("red")
          }
        if (timer === 0) {
            setButtonHidden(null)
        }
        const countDown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countDown);
      }, [timer]);

    return (
        <div className='progress-bar'>
            <div className='timer-countdown'>
                <CircularProgressbar 
                value={timer} maxValue={30} 
                text={`${timer}s`} 
                styles={buildStyles({
                    pathColor: `${colour}`
                })} />
            </div>
            <p>Question: {previousQuestions.length + 1} of 10</p>
            <p>Score: {sum}</p>
            
    
            
        </div>
    );
}

export default ProgressBar;