import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import Blog from './blog/blog';
import Game from './game/game';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import * as serviceWorker from './serviceWorker';

class Home extends React.Component{
  render() {
    return (
      <div>
         <Router>
          <div>
            <div class="ui menu">
              <Link className="item" to="/blog">Blog</Link>
              <Link className="item" to="/game">Game</Link>
            </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
        </Router>
        </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Container>
    <Home />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
