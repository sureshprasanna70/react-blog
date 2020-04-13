import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function EmptyCart() {
    return (
        <Segment color='red' inverted placeholder>
        <Header icon>
          <Icon name='warning sign' />
          Your Cart is empty
        </Header>
        <Link to='/shop' className="ui button primary"> Return to Shop</Link>
      </Segment>

        )
}