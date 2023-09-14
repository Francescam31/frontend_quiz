import { Link , useNavigate} from "react-router-dom";
import "./StartPageForm.css";
import { motion } from "framer-motion";
import { useState } from "react";

const StartPageForm = ({username, setUsername, postUser}) => {
    const navigate = useNavigate();

    const [stateUsername, setStateUsername] = useState(
        {
            name:""
        }
    )

    const handleFormSubmit = (event) => {  
        event.preventDefault()
        postUser("")
        navigate("/QuizPage")
    }

    return (
        <motion.div
        className="start-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transtion : {duration: 3} }}
        >
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
                <Link to="/QuizPage" ><button type="submit">Start Quiz</button></Link>
            </form>
            </motion.div>
    );
}

export default StartPageForm;