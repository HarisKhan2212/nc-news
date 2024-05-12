import { useState } from "react";
import { postArticleComment } from "../utils/endpoints";

export default function CommentForm({ articleId, setRefreshComments }) {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isloading, setLoading] = useState(false);
    const author = "jessjelly";
    const [commentInput, setCommentInput] = useState("");

    function handleSubmit() {
        if (!commentInput.length) {
            setError('A comment cannot be empty.')
            return;
        }

        setLoading(true);
        setError(null);
        setMessage("Attempting to post comment...");

        postArticleComment(articleId, author, commentInput).then(() => {
            setMessage("Comment posted successfully!");
            setRefreshComments(true);
        }).catch(() => {
            setMessage(null);
            setError('Something went wrong, please try again.');
        }).finally(() => {
            setLoading(false);
            setRefreshComments(true);
        });
    }

    function handleInputChange(event) {
        setCommentInput(event.target.value);
    }

    return(
        <div>
            <br />
            {error ? <p style={{ color: 'red' }}>{error}</p> : <p style={{ color: 'green' }}>{message}</p>}
            <label htmlFor="comment_text_box">Leave a comment</label>
            <p>
                <textarea
                    name="comment_text_box"
                    rows="8"
                    cols="70"
                    required
                    value={commentInput}
                    onChange={handleInputChange}
                ></textarea>
            </p>
            <button disabled={isloading | !commentInput.length} onClick={handleSubmit}>Submit</button>
        </div>
    );
}