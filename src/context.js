import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component{
    state = {
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = () => {
        console.log("hello from detail")
    }
    addToCart = () => {
        console.log("hello from cart")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


export { ProductConsumer, ProductProvider };