import React from 'react';
import Button from '../../../ui/Button/Button';
const orderSummary = (props) => {
    let orders = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span>{igKey} </span>
            {props.ingredients[igKey]}
        </li>)
    });
    return (

        <div className="OrderSummary">
            <p>Your delicious burger is ready to serve. </p>
            <ul>
                {
                    orders
                }
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
            <p>Please checkout to order</p>
            <Button clicked={props.purchaseOrders} buttonType='Success'>CHECK OUT</Button>
            <Button clicked={ props.purchaseCancelHandler} buttonType='Danger'>CANCEL</Button>
        </div>
    )
}

export default orderSummary;