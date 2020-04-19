import React, {Component} from 'react';
import BlogItems from './blogItem';
import { connect } from 'react-redux';
import BlogForm from './blogForm';
import { getData } from "../js/actions/index";

const mapStateToProps = state => {
  return {articles: state.articles.slice(0,10)};
}

class BlogList extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const { articles } = this.props;
    return (
      <div className="mt-1">
        <h1 className="shop-title">Redux V</h1>
        <div className="right floated">
          <BlogForm />
        </div>
        <div className="blog">
          {articles.map(article => (
            <BlogItems key={article.id} title={article.title}  body={article.body} color={article.color} category={article.category}/>
          ))}
        </div>
      </div>
    )
  }
    
  }

const Blog = connect(mapStateToProps,{getData})(BlogList);
export default Blog;
