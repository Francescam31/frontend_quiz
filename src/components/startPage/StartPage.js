import StartPageForm from "./StartPageForm";

const StartPage = ({username, setUsername, postUser}) => {

    return (
        <div>
            <StartPageForm username={username} setUsername={setUsername} postUser={postUser}/>
        </div>
    );
}

export default StartPage;