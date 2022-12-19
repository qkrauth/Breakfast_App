import React, {useContext} from "react";
import CartCard from "../components/CartCard";
import GlobalContext from "../store/GlobalContext";

const CartScreen = () => {
    const {state, dispatch} = useContext(GlobalContext);

    const cartDisplay = state.cart.map((drink) => {
        return <CartCard drink={drink}/>
    });

    return (
        <div className="main-page">
            <h1>My Cart</h1>
            <div className="cart-container">
                {cartDisplay}
            </div>
        </div>
    );
};

export default CartScreen;