import React from 'react';
import BlogItems from './blogItem';

const blogItems = [{ category: "news", color: "red", id: 1 }, { category: "info", color: "grey", id: 2 }, { category: "tech", color: "blue", id: 3 }, { category: "x-factor", color: "green", id: 4 }]
class Blog extends React.Component{
  render() {
    const name = "My Super Blog";
    return (
      <div className="mt-1">
        <h1>{name}</h1>
        <div className="blog">
          {blogItems.map(item => (<BlogItems category={item.category} color={item.color} id= {item.id} />))}
        </div>
          
      </div>
    )
  }
}

export default Blog;
