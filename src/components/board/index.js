import React from 'react';
import boardStyle from './board.module.scss'
import Square from '../square'

export default class Board extends React.Component{
    

    render(){
        return (
      <Square size={this.props.size}></Square>
        );
    }
}   