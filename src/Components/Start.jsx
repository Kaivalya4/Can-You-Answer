function Start({ display, onclick }) {
    return (
        <div className={!display ? "start--active" : "start"}>
            <h1>Country Quiz</h1>
            <button className="start-button" onClick={() => onclick()}>
                Start Game
            </button>
        </div>
    );
}

export default Start;
