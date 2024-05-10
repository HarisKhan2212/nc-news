import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById, patchArticleVote } from "../utils/endpoints";
import Comments from "./Comments";
import PostArticleComment from "./PostArticleComment";

function ArticleSingle(){

    const { article_id } = useParams()
    const [articleData, setArticleData] = useState({ article: {} })
    const [votes, setVotes] = useState(0)
    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null)

    useEffect(() => {
        fetchArticleById(article_id)
        .then((article) => {
            setArticleData(article)
            setVotes(article.article.votes)
        })
        .catch((error) => {
            setErr("Error fetching article data")
            console.error(error)
        });
    }, [article_id])

    const handleVote = (vote) => {
        setErr(null);
        patchArticleVote(article_id, vote)
        .then(() => {
            setVoteChange(vote)
            setVotes(prevVotes => prevVotes + vote)
        })
        .catch((error) => {
            setErr("Something went wrong, please try again.")
            console.error(error)
        })
    }

    if (err) {
        return <div>{err}</div>
    }

    return (
        <div id="article">
            <h2><u>{articleData.article.title}</u></h2>
            <p><b>Author: {articleData.article.author}</b></p>
            <img src={articleData.article.article_img_url} alt="" />
            <p>{articleData.article.body}</p>
            <p>{votes + voteChange}</p>
            <div>
                <button disabled={voteChange === 1} onClick={() => handleVote(1)}>Upvote</button>
                <button disabled={voteChange === -1} onClick={() => handleVote(-1)}>Downvote</button>
            </div>
            <PostArticleComment />
            <Comments article_id={article_id} />
        </div>
    )
}
export default ArticleSingle;
