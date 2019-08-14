import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                addIngredient={() => props.ingredientAdded(ctrl.type)}
                removeIngredient={() => props.ingredientRemoved(ctrl.type)}

            />
        ))}
        <button
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.order}>ORDER NOW</button>
    </div>
);

export default buildControls;