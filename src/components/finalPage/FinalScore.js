const FinalScore = ({aggregateScore, username}) => {

    const sum = aggregateScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div className="final-page-header">
            <h1>Congratulations {username}!</h1>
            <p>{sum}/10</p>
        </div>
    );
}

export default FinalScore;