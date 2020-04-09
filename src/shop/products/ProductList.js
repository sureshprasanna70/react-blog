import React, { Component } from 'react';
import Product from './Product';
import { Container, Grid } from 'semantic-ui-react';
import { ProductConsumer } from '../../context';
export default class ProductList extends Component{
 
    render() {
        return (
            <React.Fragment>
                    <Container>
                        <Grid className="mt-2">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </Grid>
                    </Container>
            </React.Fragment>
        )
    }
}