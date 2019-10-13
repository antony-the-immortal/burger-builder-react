import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './BurgerBuilder.scss';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../ui/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../ui/Spinner/Spinner';

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
        purchasing: false,
        loading: false
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
    purchaseCheckoutHandler = () => {
        const order ={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer : {
                name : 'Antony Jose',
                street : 'Test Street',
                zip :'12345',
                email :'test@gmail.com'
            }

        }
        axios.post('/orders.json', order).then(response => {
            console.log(response);
            this.setState({
                loading : true,
                purchasing: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loading : false,
                purchasing : false
            })
        });
        
    }
    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        purchasingHandler={this.purchasingHandler}
        purchaseCancelHandler={this.purchaseCancelHandler}
        purchaseCheckout = {this.purchaseCheckoutHandler}
        totalPrice={this.state.totalPrice}
        />
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}>
                    {
                        this.state.loading ? <Spinner/> : orderSummary
                    }
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