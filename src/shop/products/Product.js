import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

export default class Product extends Component{
    render() {
    const {title, img, price, company} = this.props.product

        return (
            <div onClick={() => console.log("you clicked me!!")}>
                <Grid.Column>
                    <Card>
                        <Link to="/details">
                            <Image src={img}/>
                        </Link>
                        <Card.Content>
                            <Card.Header>
                                {title}
                            </Card.Header>
                            <Card.Description>
                                ${price}
                            </Card.Description>
                            <Card.Meta>
                                {company}
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </div>
        )
    }
}