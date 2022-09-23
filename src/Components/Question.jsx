import PropTypes from "prop-types";
import DOMPurify from "dompurify"; ///from protection of hacker when using dangerouslysetInnerHTML

function Question({ ques }) {
    /*function sanitizeData() {
        return { __html: DOMPurify.sanitize(ques) };
    }*/

    return (
        // <h3 className="question" dangerouslySetInnerHTML={sanitizeData()}></h3>
        <h2
            className="question"
            dangerouslySetInnerHTML={{ __html: ques }}
        ></h2>
    );
}

export default Question;
