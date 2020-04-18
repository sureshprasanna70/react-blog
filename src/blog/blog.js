import React from 'react';
import BlogItems from './blogItem';
import { connect } from 'react-redux';
import BlogForm  from './blogForm';

const mapStateToProps = state => {
  return {articles: state.articles};
}
function BlogList({articles}){
    return (
      <div className="mt-1">
        <h1 className="shop-title">Redux V</h1>
        <div class="right floated">
          <BlogForm />
        </div>
        <div className="blog">
          {articles.map(article => (
            <BlogItems key={article.id} title={article.title}  content={article.content} color={article.color} category={article.category}/>
          ))}
        </div>
      </div>
    )
  }

const Blog = connect(mapStateToProps)(BlogList);
export default Blog;
