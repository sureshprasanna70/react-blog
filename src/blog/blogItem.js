import React, {Component} from 'react';
import { Label } from 'semantic-ui-react';

class BlogItems extends Component{
    render() {
      const { category,color,id,title,body } = this.props;
      return (
          <div className="blogItems">
          <div className="title">{title}</div>
          <div id={id} className="content">
              {body}
          </div>
          <div className="category">
            <Label as='a' color={color}>{category}</Label>
          </div>
        </div>
        )
      }
}
export default BlogItems;