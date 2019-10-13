import React from 'react';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Meat', type : 'meat'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Bacon', type : 'bacon'}
];
const buildControls = (props) => {
    
return (
    <div className='BuildControls'>
    <p>Current price : <strong>{ props.price.toFixed(2)}</strong></p>
        {
            controls.map((ctrl,index) => {
               return <BuildControl
               key = {ctrl.label + index}
                        label = {ctrl.label}
                        type ={ctrl.type}
                        add ={()=>{props.addIngredient(ctrl.type)}}
                        remove ={()=>{props.removeIngredient(ctrl.type)}}
                        disabledInfo ={props.disabledInfo[ctrl.type]}
                    />
            })
        }
        <button className="OrderButton" onClick={props.purchasing} disabled={props.purchasable}>ORDER NOW</button>
    </div>
)
}

export default buildControls;