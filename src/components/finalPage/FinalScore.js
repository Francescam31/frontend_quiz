import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../../App.css"

const FinalScore = ({aggregateScore, username}) => {

    const sum = aggregateScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div className="final-page-header">
            <h1>Congratulations {username}!</h1>
            <div className='final-page-score-circle'>
                <CircularProgressbar 
                value={sum} maxValue={10} 
                text={`${sum}/10`} 
                styles={buildStyles({
                    pathColor: `green`
                })} />
            </div>
        </div>
    );
}

export default FinalScore;