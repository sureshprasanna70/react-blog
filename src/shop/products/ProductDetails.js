import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';
export default class ProductDetails extends Component{
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, price, info, title, inCart } = value.detailProduct
                    return (
                        <div className="product">
                            <Header as='h1' className="shop-title">{title}</Header>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <img src={img} alt={title}/>
                                </Grid.Column>
                                <Grid.Column>
                                    <p class="price">
                                        <strong>Price: ${price}</strong>
                                    </p>
                                    <p class="make">
                                       <stron>Maker: </stron> {company}
                                    </p>
                                    <p className="info">
                                        {info} 
                                    </p>
                                    <div className="actions">
                                    <Link to="/products" className="ui red button ">Back to Products</Link>
                                        <Button color="blue">Add to Cart</Button>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    )
                }}                
            </ProductConsumer>
        )
    }
}