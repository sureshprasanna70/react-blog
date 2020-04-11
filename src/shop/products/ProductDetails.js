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
                                    <p className="price">
                                        <strong>Price: ${price}</strong>
                                    </p>
                                    <p className="make">
                                       <strong>Maker:  {company} </strong>
                                    </p>
                                    <p className="info">
                                        {info} 
                                    </p>
                                    <div className="actions">
                                        <Link to="/shop" className="ui large red button">Back to Products</Link>
                                        <Button size="large" icon="shop" color="blue" disabled={inCart ? true: false} onClick={() => value.addToCart(id)}>
                                          {inCart ? "Already in Cart" : "Buy $" + price}
                                        </Button>
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