import React from 'react'
import './ArticleFilter.css'
function ArticleFilter({ articles, category }) {
    const filteredArticles = articles.filter((article) => article.category === category && article.active);
  
    return filteredArticles.map((article) => (
      <div>
        <article key={article.id}>
          <h2>{article.heading}</h2>
          <p>{article.text}</p>
        </article>
      </div>
    ));
  };

export default ArticleFilter