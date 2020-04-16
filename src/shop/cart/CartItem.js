import React from 'react';
import { Grid, Icon, Button } from 'semantic-ui-react';
export default function CartItem({ item, value }) {
    const { id, title, price, total, count, img } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <React.Fragment>
            <Grid.Row textAlign="center">
                <Grid.Column>
                    {title}
                </Grid.Column>
                <Grid.Column>
                    ${price}
                </Grid.Column>
                <Grid.Column>
                    <Button basic icon="minus circle" size="small" onClick={() => decrement(id)} color="red" />
                    <span className="cart-product-count">{count}</span>
                    <Button basic icon="plus circle" size="small" onClick={() => increment(id)} color="green" />
                </Grid.Column>
                <Grid.Column onClick={() => removeItem(id)}>
                    <Icon name='trash' color="red" size="large" />
                </Grid.Column>
                <Grid.Column>${total}</Grid.Column>
            </Grid.Row>
        </React.Fragment>
    )
}