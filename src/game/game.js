import React from 'react';
import Board from './board';

class Game extends React.Component{
    render() {
      return (
        
        <div class="game mt-7">
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
export default Game;