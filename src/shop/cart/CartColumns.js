import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
export default function CartColumns(){
    return (
        <React.Fragment>
            <Header as='h1' className="shop-title">Your Cart</Header>
            <Grid stackable columns="5" textAlign="center">
                <Grid.Column only='large screen'>
                    Name
                </Grid.Column>
                <Grid.Column only='large screen'>
                    Price
                </Grid.Column>
                <Grid.Column only='large screen' textAlign="center">
                    Quantity
                </Grid.Column>
                <Grid.Column only='large screen'>
                    Remove
                </Grid.Column>
                <Grid.Column>
                    Total
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}