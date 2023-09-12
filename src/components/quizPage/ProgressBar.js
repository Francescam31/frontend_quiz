const ProgressBar = ({previousQuestions, aggregateScore}) => {


    

    return (
        <div>
            <p>Question: {previousQuestions.length + 1} of 10</p>
            <p>Score: </p>
        </div>
    );
}

export default ProgressBar;