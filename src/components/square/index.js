import React from 'react';
import squareStyle from './square.module.scss'

export default class Square extends React.Component{

  defineSize(){
    const difficultSetted = this.props.size;

    switch (difficultSetted){
      case 'L':
        return squareStyle.easyBtn;
      
      case 'M':
        return squareStyle.mediumBtn;

        case 'S':
        return squareStyle.hardBtn;

    }
  }

    render(){
        return (
          <button className={this.defineSize()}>
              {this.props.size}
          </button>  
        );
    }
}   