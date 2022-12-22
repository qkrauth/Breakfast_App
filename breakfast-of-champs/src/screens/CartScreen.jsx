import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartCard from "../components/CartCard";
import GlobalContext from "../store/GlobalContext";
import useCurrency from "../hooks/useCurrency";

const CartScreen = () => {
    const {state, dispatch} = useContext(GlobalContext);

    const cartDisplay = state.cart.map((drink) => {
        return <CartCard drink={drink}/>
    });

    const cartTotal = state.cart.reduce((acc, drink) => {
        return acc + drink.cost
    }, 0);

    const total = useCurrency(cartTotal)
        

    return (
        <div className="main-page">
            <h1>My Cart</h1>
            <h2>{total}</h2>
            <div className="cart-container">
                {cartDisplay}
            </div>
            <div className="order-form-button-container">
                <Link to="/thankyou"><button>Check Out</button></Link>
            </div>
        </div>
    );
};

export default CartScreen;