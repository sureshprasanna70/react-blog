import React from 'react';
import { Label } from 'semantic-ui-react';

class BlogItems extends React.Component{
    render() {
      const { category, color, id } = this.props;
      return (
          <div class="blogItems">
          <Label as='a' color={color}>{category}</Label>
          <p id={id}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        )
      }
}
export default BlogItems;