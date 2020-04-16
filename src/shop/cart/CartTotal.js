import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CartTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal } =  value 
    const {clearCart} = value
    return (
        <div className="right floated cart-totals">
             <Link to="/shop">
                <Button basic size="large" color="red" onClick={() => clearCart()}>
                    Clear Cart
                </Button>    
            </Link>    
            <div className="mt-2">
                <strong> Cart SubTotal: </strong> ${cartSubTotal} 
            </div>
            <div className="mt-2">
                <strong>Tax: </strong> ${cartTax}
            </div>
            <div className="mt-2">
                <strong>Total Amount:  </strong> ${cartTotal}
            </div>
        </div>
    )
    
}