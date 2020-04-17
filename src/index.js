import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import Blog from './blog/blog';
import Game from './game/game';
import Shop from './shop/shop'
import ProductDetails from './shop/products/ProductDetails'
import Cart from './shop/cart/Cart'
import Default from './Default'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Icon, Menu, Image } from 'semantic-ui-react'
import { ProductProvider, ProductConsumer } from './context';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import index from "./js/index"
window.store = store;
class Home extends React.Component{
  render() {
    return (
        <Router>
            <Menu inverted stackable borderless>
              <Container>
            <Menu.Item as='a' header href="/">
                  <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                  Learn React
                  </Menu.Item>
                <Menu.Item><Link to="/blog">Blog</Link></Menu.Item>
                <Menu.Item><Link to="/game">Game</Link></Menu.Item>
                <Menu.Item><Link to="/shop">Shop</Link></Menu.Item> <ProductConsumer>
              {(value) => (
                <Menu.Item position="right">
                  <Link className="item" to="/cart">
                    <Icon name="shopping cart" />Cart
                    <div className="cart-count">{value.getCartCount()}</div>
                  </Link>
                </Menu.Item>
                )}
                </ProductConsumer>
              </Container>
            </Menu>
            <Switch>
              <Route exact path="/">
                <Provider store={store}>
                  <App />
                </Provider>
              </Route>
              <Route path="/blog">
                <Provider store={store}>
                   <Blog />
                </Provider>
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/shop/">
                <Shop />
              </Route>
              <Route path="/details" >
                <ProductDetails/>
              </Route>
              <Route path="/cart" >
                <Cart/>
              </Route>
              <Route component={Default} />
            </Switch>
        </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Container>
         <Home />
      </Container>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
