import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { ProductConsumer } from '../../context';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
export default class Cart extends Component{
    render() {
        return (
                <ProductConsumer>
                {(value) => (
                    <div className="mt-1">    
                        {value.getCartCount() > 0 ? <CartColumns/> : <EmptyCart/>}
                        
                    </div>
                    )}
                </ProductConsumer>
        )
    }
}