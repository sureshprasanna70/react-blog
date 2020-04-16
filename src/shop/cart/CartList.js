import React from 'react';
import CartItem from './CartItem'
import { Grid } from 'semantic-ui-react';
export default function CartList({ value }) {
    const {cart} = value
    return (
        <Grid stackable columns="5">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </Grid>
    )
}