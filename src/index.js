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
import Cart from './shop/Cart'
import Default from './Default'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Icon } from 'semantic-ui-react'
import { ProductProvider, ProductConsumer } from './context';
import * as serviceWorker from './serviceWorker';

class Home extends React.Component{
  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
         <Router>
          <div>
            <div className="ui menu">
              <Link className="item" to="/"><Icon name='home' color="orange" /></Link>
              <Link className="item" to="/blog">Blog</Link>
              <Link className="item" to="/game">Game</Link>
              <Link className="item" to="/shop">Shop</Link>
              <ProductConsumer>
                {(value) => (
                  <div className="right menu">
                  <Link className="item" to="/cart"><Icon name="shopping cart" />Cart <span class="cart-count">{value.getCartCount()}</span></Link>
                </div>
                )}
              </ProductConsumer>
              
            </div>
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/blog">
                <Blog />
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
          </div>
        </Router>
      </div>
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
