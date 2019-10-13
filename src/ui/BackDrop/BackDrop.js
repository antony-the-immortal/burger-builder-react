import React from 'react';
import './BackDrop.scss';
const backDrop = (props) => {
    return (
            props.show ? <div className="BackDrop" onClick={props.clicked}></div> : null
    )
}
export default backDrop;