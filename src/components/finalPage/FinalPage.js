import FinalScore from "./FinalScore";
import Review from "./Review";

const FinalPage = ({aggregateScore, previousQuestions}) => {

    return (
        <div>
            <FinalScore aggregateScore={aggregateScore}/>
            <Review previousQuestions={previousQuestions} aggregateScore={aggregateScore}/>
        </div>
    );
}

export default FinalPage;