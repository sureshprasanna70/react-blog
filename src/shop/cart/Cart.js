import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
export default class Cart extends Component{
    render() {
        return (
            <div className="mt-1">
                 <ProductConsumer>
                    {(value) => {
                        if(value.getCartCount() > 0){
                            return <div>
                                <CartColumns /><CartList value={value} />
                                <CartTotal value={value}/>
                            </div>
                        } else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}