import React from 'react';
import { Table, Header } from 'semantic-ui-react';
export default function CartColumns(){
    return (
        <React.Fragment>
            <Header as='h1'>Your Cart</Header>
            <Table stackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                        <Table.HeaderCell textAlign='right'>Total</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
        </React.Fragment>
    )
}