import '../../App.css'

const ProgressBar = ({previousQuestions, aggregateScore, setAggregateScore, timer, setTimer}) => {

    let sum = 0;

    if(aggregateScore.length > 0) {
        for(let i = 0; i < aggregateScore.length; i++) {
        sum = sum + aggregateScore[i];
    }} else {
        sum = 0;
    }

    const newTime = () => {
        if(timer >= 0) {
         setTimeout(() => {setTimer(timer - 1);}, 1000) 
         return timer; 
        } else {
            setTimer = 0;
            setAggregateScore([...aggregateScore, 0]);
            return timer;
        }
    }

    // useEffect

    return (
        <div>
            <p>Question: {previousQuestions.length + 1} of 10</p>
            <p>Score: {sum}</p>
            <p>{newTime()}</p>
            
        </div>
    );
}

export default ProgressBar;