import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component{
    state = {
        products:[],
        detailProduct:detailProduct
    }
    componentDidMount() {
        this.setProducts();
    }
    handleDetail = () => {
        console.log("hello from detail")
    }
    addToCart = () => {
        console.log("hello from cart")
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(storeProduct => {
            const singleProduct = { ...storeProduct }
            tempProducts.push(singleProduct)
        });
        this.setState(() => {
            return { products:tempProducts}
        })
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