import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './BurgerBuilder.scss';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../ui/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.4,
    meat: 1.3,
    cheese: 0.2,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const oldPrice = this.state.totalPrice;
            const updatedCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
            const newPrice = oldPrice - INGREDIENT_PRICES[type];

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
            this.updatePurchaseState(updatedIngredients);
        }
    }
    updatePurchaseState(newIngredients) {
        const ingredients = newIngredients;
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            }).reduce((_sum, el) => {
                return _sum + el;
            }, 0)
        this.setState({
            purchasable: sum > 0
        })
    }
    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }
    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        purchasingHandler={this.purchasingHandler}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        totalPrice={this.state.totalPrice}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    price={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    purchasable={!this.state.purchasable}
                    purchasing={this.purchasingHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;