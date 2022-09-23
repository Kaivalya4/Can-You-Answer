import "./App.css";
import Header from "./Components/Header";
import Start from "./Components/Start";
import Svg1 from "./Components/Svg1";
import Game__Section from "./Components/Game__Section";
import { useState } from "react";
import Svg2 from "./Components/Svg2";
import Button from "./Components/Button";

function App() {
    const [showstart, changestart] = useState(0);
    const [score, changescore] = useState(0);

    function startclick() {
        changestart(showstart + 1);
    }

    function changeScore() {
        changescore(score + 1);
    }

    function reset() {
        changescore(0);
        changestart(0);
    }

    return (
        <>
            <Header />
            <div className="main">
                <Start display={showstart} onclick={startclick} />
                {showstart < 11 && showstart > 0 ? (
                    <div className="game">
                        <h1 className="game-heading">Anime Quiz</h1>
                        <Svg1 />
                        <Game__Section
                            changeScore={changeScore}
                            iteration={startclick}
                        />
                    </div>
                ) : showstart == 11 ? (
                    <div className="game">
                        <h1 className="game-heading">Arigato(Thank You)</h1>
                        <div className="game__section">
                            <Svg2 />
                            <h1 className="center-score">Results</h1>
                            <p className="center-score">
                                You got <span class="big">{score}</span> correct
                                answer
                            </p>
                            <Button
                                classname="start-button"
                                displayvalue="Go Home"
                                Editprogress={reset}
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default App;
