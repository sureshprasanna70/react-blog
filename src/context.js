import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component{
    state = {
        products:[],
        detailProduct: detailProduct,
        cart: []
    }
    componentDidMount() {
        this.setProducts();
    }
    
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        const price  = product.price
        product.inCart = true
        product.count = 1
        product.total = price
        console.log(`hello from cart.${id}`)
        this.setState(() => {
            return{products: tempProducts, cart: [...this.state.cart,product] }
        })
    }
    getCartCount = () => {
        let cartItems =[...this.state.cart]
        return cartItems.length
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
                addToCart: this.addToCart,
                getCartCount: this.getCartCount
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


export { ProductConsumer, ProductProvider };