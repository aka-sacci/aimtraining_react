import React from 'react';
import gameStyle from './game.module.scss'
import Board from '../board'
import Square from '../square'

export default class Game extends React.Component{
    
    constructor(props){

        super(props);
        this.state = {
         squares: Array,
         size: "M"
        };
    }

    sizeHandler(sizeHandler){
    
        this.setState({
            size: sizeHandler
        })

    }

    render(){
        return (
            <>
            <div className={gameStyle.selectSquareSize}>
            <h3>Select one of the sizes</h3>

            <div className={gameStyle.buttons}>
            <button onClick={() => this.sizeHandler("L")
            }>
                Large
            </button>

            <button onClick={() => this.sizeHandler("M")
            }>
            Medium
            </button>

            <button onClick={() => this.sizeHandler("S")
            }>
            Small
            </button>
            </div>

            <div className={gameStyle.squaresTemplate}>
                <p>Preview:</p>
            <Square size={this.state.size}></Square>
            </div>
          </div>
        
           
           
          </>
        );
    }
}   