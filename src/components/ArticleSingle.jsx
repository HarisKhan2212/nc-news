import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from "../utils/endpoints";
import Comments from "./Comments";

function ArticleSingle(){

    const [articleData, setArticleData] = useState({ article: {} })
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleById(article_id)
        .then((article) => {
            setArticleData(article)
        })
    }, [article_id])

 
    if (!articleData) {
        return <div>Error: Article does not exist</div>
    }

    return (
        <div id="article">
            <h2><u>{articleData.article.title}</u></h2>
            <p>{articleData.article.author}</p>
            <img src={articleData.article.article_img_url} alt="" />
            <p>{articleData.article.body}</p>
            <Comments article_id={article_id}>
            </Comments>
        </div>
    )
}

export default ArticleSingle;

