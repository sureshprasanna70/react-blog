import React, {Component} from 'react';
import { Label } from 'semantic-ui-react';

class BlogItems extends Component{
    render() {
      const { category, color, id,title ,content } = this.props;
      return (
          <div className="blogItems">
          <div className="title">{title}</div>
          <div id={id} className="content">
              {content}
          </div>
          <div className="category">
            <Label as='a' color={color}>{category}</Label>
          </div>
        </div>
        )
      }
}
export default BlogItems;