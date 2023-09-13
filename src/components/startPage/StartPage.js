import StartPageForm from "./StartPageForm";

const StartPage = ({username, setUsername, postUser}) => {

    return (
        <div className="app">
            <StartPageForm username={username} setUsername={setUsername} postUser={postUser}/>
        </div>
    );
}

export default StartPage;