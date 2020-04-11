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
    
    addToCart = (id) => {
        console.log(`hello from cart.${ id }`)
    }
    getItem = (id) => {
        return this.state.products.find(item => item.id === id);
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
    handleDetail = (id) => {
        const fProduct = this.getItem(id);
        this.setState(() => {
            return { detailProduct: fProduct}
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