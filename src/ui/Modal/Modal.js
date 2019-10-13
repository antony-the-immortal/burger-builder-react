import React, {Component} from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../hoc/Auxiliary';
import './Modal.scss';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    render () { 
    
    return <Aux>
            <BackDrop show={this.props.show} clicked={this.props.modalClose} />
            <div className="Modal"
                style={
                    {
                        transform: this.props.show ? 'transalteY(0)' : 'transalteY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }
                }>
                {
                    this.props.children
                }
            </div>
        </Aux>
    }
}
export default Modal;