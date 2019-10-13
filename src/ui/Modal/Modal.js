import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../hoc/Auxiliary';
import './Modal.scss';
const modal = (props) => {
    console.log(props);
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.modalClose} />
            <div className="Modal"
                style={
                    {
                        transform: props.show ? 'transalteY(0)' : 'transalteY(-100vh)',
                        opacity: props.show ? '1' : '0',
                    }
                }>
                {
                    props.children
                }
            </div>
        </Aux>
    )
}
export default modal;