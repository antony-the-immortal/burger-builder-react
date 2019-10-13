import React from 'react';
import './Buttons.scss';
const button = (props) =>{
    return (<button 
        className={'Button '+ props.buttonType}
        onClick={props.clicked}
        >
        {props.children}
        </button>)
}
export default button;