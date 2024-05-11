import { useState, useEffect } from "react"
import { postArticleComment } from "../utils/endpoints"
import { useParams } from "react-router-dom"

function CommentForm({ comments, setComments }) {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const { articleId } = useParams();
    const [commentInput, setCommentInput] = useState({
        author: "jessjelly",
        body: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        if (commentInput.body.length > 2) {
            setMessage("Attempting to post comment...");
            postArticleComment(articleId, commentInput.author, commentInput.body)
                .then(() => {
                    setLoading(false);
                    setError(null);
                    setMessage("Comment posted successfully!");
                    setComments([...comments, commentInput]);
                })
                .catch((error) => {
                    setMessage(null);
                    setError('Something went wrong, please try again.');
                    setComments(comments.slice(0, -1));
                });
        } else {
            setError('A comment must be at least 3 characters.');
        }
    };

    const handleInputChange = (event) => {
        setCommentInput({
            ...commentInput,
            body: event.target.value
        });
    };

    return (
        <form>
            <br />
            {error ? <p style={{ color: 'red' }}>{error}</p> : <p style={{ color: 'green' }}>{message}</p>}
            <label htmlFor="comment_text_box">Leave a comment</label>
            <p>
                <textarea
                    name="comment_text_box"
                    rows="8"
                    cols="70"
                    required
                    value={commentInput.body}
                    onChange={handleInputChange}
                ></textarea>
            </p>
            <button disabled={loading} onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default CommentForm