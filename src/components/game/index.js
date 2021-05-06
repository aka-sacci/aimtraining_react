import React from 'react';
import gameStyle from './game.module.scss'
import Board from '../board'
import Square from '../square'
import convertDStoSeconds from '../../utils/convertDStoSeconds'
export default class Game extends React.Component{
    
    constructor(props){

        super(props);
        this.state = {
         squares: Array,
         size: "M",
         time: 200
        };
    }

    sizeHandler(sizeHandler){
    
        this.setState({
            size: sizeHandler
        })

    }

    intervalHandler(){
      const rangeTime = document.getElementById('range').value;
      this.setState({
          time: rangeTime
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

          <div className={gameStyle.selectInterval}>
            <h3>Set the interval:</h3>
            <div className={gameStyle.rangeDiv}>
            <input type="range" min="1" max="400" defaultValue="200" className={gameStyle.rangeStyle} onChange={() => this.intervalHandler()} id="range"/>
            <p>{convertDStoSeconds(this.state.time)} seconds</p>

                <button>Start</button>
             
            </div>
          </div>
        
           
           
          </>
        );
    }
}   