import StartPageForm from "./StartPageForm";
import { Link, Outlet } from "react-router-dom";

const StartPage = () => {

    return (
        <div>
            <StartPageForm />
            <Link to="/QuizPage" ><button>Start Quiz</button></Link>
        </div>
    );
}

export default StartPage;