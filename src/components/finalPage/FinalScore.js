const FinalScore = ({aggregateScore}) => {

    // let sum = 0;

    // if(aggregateScore.length > 0) {
    //     for(let i = 0; i < aggregateScore.length; i++) {
    //     sum = sum + aggregateScore[i];
    // }} else {
    //     sum = 0;
    // } 

    const sum = aggregateScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div>
            <h1>Congratulations</h1>
            <p>{sum}</p>
            <a href="/"><button>Play Again</button></a>
        </div>
    );
}

export default FinalScore;