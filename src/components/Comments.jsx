import { useState, useEffect } from "react"
import { fetchComments } from "../utils/endpoints"
import { deleteArticleComment } from "../utils/endpoints";

function Comments({article_id, refreshComments, currentUser, setRefreshComments}) {
    const [commentData, setCommentData] = useState([]);
    
    useEffect(() => {
        fetchComments(article_id)
        .then((comments) => {
            setCommentData(comments)
        })
    }, [article_id, refreshComments])

    function handleDelete(commentId) {
     console.log(commentId)
        // setLoading(true);
        // setError(null);
        // setMessage("Attempting to post comment...");

        deleteArticleComment(article_id, currentUser).then(() => {
            // setMessage("Comment posted successfully!");
            setRefreshComments(true);
        }).catch(() => {
            // setMessage(null);
            // setError('Something went wrong, please try again.');
        }).finally(() => {
            // setLoading(false);
            setRefreshComments(true);
        });
    }


    return (
        <div>
            <h4>Comments</h4>
            {commentData.map((comment, index)=>{
                return (<div key={index}>
                        <b>{comment.author}:</b>
                        <p>Votes: {comment.votes}</p>
                        <p>{comment.body}</p>
                        <button disabled={currentUser !== comment.author} onClick={handleDelete(comment.comment_id)}>delete</button>
                        </div>
                )
            })}
        </div>
    )
 }

export default Comments