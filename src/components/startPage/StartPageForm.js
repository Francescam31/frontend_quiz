import { Link } from "react-router-dom";
import "./StartPageForm.css";

const StartPageForm = ({username, setUsername, postUser}) => {

    const handleFormSubmit = (event) => {  
        event.preventDefault()
        postUser("")
    }

    return (
        <div className="start-page-container">
            <h1>FrontEnd of the world 🌍💡</h1>
            <h2>Your knowledge Our arena</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Link to="/QuizPage" ><button>Start Quiz</button></Link>
            </form>
    
        </div >
    );
}

export default StartPageForm;