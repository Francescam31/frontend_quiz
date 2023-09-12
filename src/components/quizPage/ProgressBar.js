const ProgressBar = ({previousQuestions, aggregateScore}) => {

    let sum = 0;

    if(aggregateScore.length > 0) {
        for(let i = 0; i < aggregateScore.length; i++) {
        sum = sum + aggregateScore[i];
    }} else {
        sum = 0;
    }


    // const sum = aggregateScore.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue
    //   },0);

    return (
        <div>
            <p>Question: {previousQuestions.length + 1} of 10</p>
            <p>Score: {sum}</p>
        </div>
    );
}

export default ProgressBar;