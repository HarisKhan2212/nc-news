import { fetchAllArticles } from "../utils/endpoints"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
    const [articleList, setArticleList] = useState([]);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetchAllArticles()
        .then((articles) => {
          const sortedArticles = articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setArticleList(sortedArticles)
          setLoading(false)
        })
    }, [])
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div id="article-list">
        {articleList.map((article, index) => (
          <div id="article-list-item" key={index}>
            <Link to={`/articles/${article.article_id}`}>
              <h3><u>{article.title}</u></h3>
              <img src={article.article_img_url} alt="Featured image for an article" />
            </Link>
            <p>Author: {article.author}</p>
          </div>
        ))}
      </div>
)
}
  
  export default ArticleList;