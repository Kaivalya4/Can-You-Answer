function Options({ number, num, option, onclick, correct, clicked }) {
    return (
        <div
            className="options"
            onClick={(e) => onclick(num, correct === option)}
            style={{
                backgroundColor: clicked
                    ? correct === option
                        ? "green"
                        : clicked === num
                        ? "red"
                        : ""
                    : "",
                color: clicked
                    ? correct === option
                        ? "white"
                        : clicked === num
                        ? "white"
                        : ""
                    : "",
            }}
        >
            <div className="part1">
                <p>{number}</p>
                <label htmlFor="check1">{option}</label>
            </div>
        </div>
    );
}

export default Options;
