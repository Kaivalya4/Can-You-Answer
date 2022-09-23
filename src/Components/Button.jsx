function Button({ classname, Editprogress, displayvalue }) {
    return (
        <button className={classname} onClick={() => Editprogress()}>
            {displayvalue}
        </button>
    );
}

export default Button;
