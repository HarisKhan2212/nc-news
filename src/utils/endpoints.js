import axios from 'axios'

function fetchAllArticles(){

    return axios.get(
        'https://backend-project-2yjd.onrender.com/api/articles').then((response) => {
        return(response.data.articles);
    })
    .catch((err) => {
        console.log(err);
    })
}

function fetchArticleById(articleId){

        return axios.get(
            `https://backend-project-2yjd.onrender.com/api/articles/${articleId}`).then((response) => {
            return response.data
        })
        .catch((err) => {
            console.log(err);
        })
    }

function fetchComments(articleId){
    return axios.get(
        `https://backend-project-2yjd.onrender.com/api/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
    })
    .catch((err) => {
        console.log(err);
    })
}
function patchArticleVote(article_id, vote) {
    return axios.patch(
        `https://backend-project-2yjd.onrender.com/api/articles/${article_id}`, 
        { inc_votes: vote }
        )
    }

function postArticleComment(articleId, author, body){
    return axios.post(`https://backend-project-2yjd.onrender.com/api/articles/${articleId}/comments`, {
        "username": author, "body": body
        }).then((response) => {
        return response
     })
    .catch((err) => {
        console.log(err);
    })
}

function deleteArticleComment(article_id, username) {
    return axios.delete(
        `https://backend-project-2yjd.onrender.com/api/articles/${article_id}`, 
        
        )
    }
    



export {fetchAllArticles, fetchArticleById, fetchComments, patchArticleVote, postArticleComment, deleteArticleComment}