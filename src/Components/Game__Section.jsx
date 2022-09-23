import Question from "./Question";
import Options from "./Options";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";

function Game__Section({ changeScore, iteration }) {
    const [options, editoptions] = useState([]);
    const [alldetail, editdetail] = useState({});
    const [clicked, editclicked] = useState(0);
    const [progress, editprogress] = useState(0);

    useEffect(
        function () {
            fetch(
                "https://opentdb.com/api.php?amount=1&category=31&difficulty=easy&type=multiple"
            )
                .then((response) => response.json())
                .then((data) => {
                    let option = [];
                    option.push(data.results[0].correct_answer);
                    option = option.concat(data.results[0].incorrect_answers);
                    option.sort();
                    editoptions(option);
                    editdetail(data.results[0]);
                });
        },
        [progress]
    );

    function onclick(num, iscorrect) {
        if (clicked == 0) {
            editclicked(num);
            if (iscorrect) {
                changeScore();
            }
        }
    }

    function Editprogress() {
        editclicked(0);
        editprogress(progress + 1);
        iteration();
    }

    return (
        <div className="game__section">
            <Question ques={alldetail.question} />
            <Options
                number="A"
                num={1}
                option={options[0]}
                onclick={onclick}
                correct={alldetail.correct_answer}
                clicked={clicked}
            />
            <Options
                number="B"
                num={2}
                option={options[1]}
                onclick={onclick}
                correct={alldetail.correct_answer}
                clicked={clicked}
            />
            <Options
                number="C"
                num={3}
                option={options[2]}
                onclick={onclick}
                correct={alldetail.correct_answer}
                clicked={clicked}
            />
            <Options
                number="D"
                num={4}
                option={options[3]}
                onclick={onclick}
                correct={alldetail.correct_answer}
                clicked={clicked}
            />
            <Button
                classname={clicked ? "next-button--active" : "next-button"}
                Editprogress={Editprogress}
                displayvalue="Next"
            />
        </div>
    );
}

export default Game__Section;
