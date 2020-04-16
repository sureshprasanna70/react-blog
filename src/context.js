import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component{
    state = {
        products:[],
        detailProduct: detailProduct,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal:0
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
        }, () => {
                this.addTotals();
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
    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const product = tempCart[tempCart.indexOf(selectedProduct)]
        product.count = product.count + 1
        product.total = product.price * product.count
        this.setState(() => {
            return {cart: [...tempCart]}
        }, () => {
                this.addTotals()
        })
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const product = tempCart[tempCart.indexOf(selectedProduct)]
        product.count = product.count - 1
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.price * product.count
            this.setState(() => {
                return { cart: [...tempCart] }
            }, () => {
                this.addTotals()
            })
        }
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        let index = tempProducts.indexOf(this.getItem(id));
        let product = tempProducts[index]
        product.inCart = false;
        product.count = 0
        product.total = 0
        tempCart = tempCart.filter(item => item.id !== id)
        this.setState(() => {
            return {cart: tempCart, products:tempProducts}
        }, () => {
                this.addTotals();
        })
    }
    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
                this.setProducts()
                this.addTotals()
        })
    }
    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        let tempTax = parseFloat((subTotal * 0.15).toFixed(2))
        let total = subTotal + tempTax
        this.setState(() => {
            return{cartSubTotal: subTotal, cartTax: tempTax, cartTotal: total}
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                getCartCount: this.getCartCount,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


export { ProductConsumer, ProductProvider };