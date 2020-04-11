import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../../context';

export default class Product extends Component{
    truncate(str) {
        return str.length > 50 ? str.substring(0, 50) + "..." : str;
    }
    render() {
    const {id, title, img, price,  info, inCart} = this.props.product

        return (
            <Grid.Column>
                <ProductConsumer>
                    {value => (
                        <div onClick={() => value.handleDetail(id)}>
                        <Card>
                            <Link to="/details">
                                <Image src={img}/>
                            </Link>
                            <Card.Content>
                                <Card.Header>
                                    {title}
                                </Card.Header>
                                <Card.Description>
                                   <p>{this.truncate(info)}</p>
                                <Card.Meta>
                                    <Button basic size="large" animated='vertical' color="blue" disabled={inCart ? true: false} onClick={() => value.addToCart(id)}>
                                        <Button.Content visible>
                                            <Icon name='shop' /> {inCart ? "Already in Cart" : "$"+price}
                                        </Button.Content>
                                        <Button.Content hidden>
                                            Add to Cart
                                        </Button.Content>
                                    </Button>
                                    </Card.Meta>
                                    </Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                    )}
                </ProductConsumer>
            </Grid.Column>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        inCart: PropTypes.bool,
        price: PropTypes.number,
    })
}