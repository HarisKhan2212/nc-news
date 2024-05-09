import { useState, useEffect } from "react"
import { fetchComments } from "../utils/endpoints"

function Comments({article_id}) {
    const [commentData, setCommentData] = useState([])
    
    useEffect(() => {
        fetchComments(article_id)
        .then((comments) => {
            setCommentData(comments)
        })
    }, [article_id])

    return (
        <div>
         <h4>Comments</h4>
         {commentData.map((comment, index)=>{
             return (<div key={index}>
                     <b>{comment.author}:</b>
                     <p>Votes: {comment.votes}</p>
                     <p>{comment.body}</p>
                     </div>
             )
         })}
         </div>
 )
 }

export default Comments