import React, {useContext} from "react";
import CartCard from "../components/CartCard";
import GlobalContext from "../store/GlobalContext";

const CartScreen = () => {
    const {state, dispatch} = useContext(GlobalContext);

    const cartDisplay = state.cart.map((drink) => {
        return <CartCard drink={drink}/>
    });

    const cartTotal = state.cart.reduce((acc, drink) => {
        return acc + drink.cost
    }, 0);
        

    return (
        <div className="main-page">
            <h1>My Cart</h1>
            <h2>{cartTotal}</h2>
            <div className="cart-container">
                {cartDisplay}
            </div>
        </div>
    );
};

export default CartScreen;