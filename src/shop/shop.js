import React, { Component } from 'react';

import ProductList from './products/ProductList';

export default class Shop extends Component{
    render() {
        return (
            <div className="mt-1">
                <h1 className="shop-title"> Welcome to Store!</h1>
                <ProductList />
            </div>
        )
    }
}