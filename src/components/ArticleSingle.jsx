import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from "../utils/endpoints";

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
            <h1><u>{articleData.article.title}</u></h1>
            <p>{articleData.article.author}</p>
            <img src={articleData.article.article_img_url} alt="" />
            <p>{articleData.article.body}</p>
        </div>
    )
}

export default ArticleSingle;

