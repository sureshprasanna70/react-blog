import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Grid, Label } from 'semantic-ui-react'
import * as serviceWorker from './serviceWorker';

const blogItems = [[{category: "news",color:"red"},{category:"info",color:"grey"}],[{category: "tech",color:"blue"},{category:"x-factor",color:"green"}]]
class Blog extends React.Component{
  render() {
    const name = "My Super Blog";
    return (
      <div>
        <h1>{name}</h1>
        <BlogItems/>
      </div>
    )
  }
}
class BlogItems extends React.Component{
  render() {
    var tiles = blogItems.map(function (blogItem) {
      return (<div>
        <Grid columns={2}>
        <Grid.Row>
        <Grid.Column>
        <Label as='a' color={blogItem[0].color}>{blogItem[0].category}</Label>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </Grid.Column>
        <Grid.Column>
        <Label as='a' color={blogItem[1].color}>{blogItem[1].category}</Label>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>)
    })
    return tiles;
  }
}
class Square extends React.Component{
  render() {
    return (
      <button className="square">
          {/* TODO */}
      </button>
    );
  }
}


class Board extends React.Component{

  renderSquare(i) {
    return <Square />;
  }
  render() {
    const status = "Next Player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component{
  render() {
    return (
      
      <div class="game">
        <div class="game-board">
          <Board/>
        </div> 
        <div class="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        </div>
        
    )
  }
}

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
