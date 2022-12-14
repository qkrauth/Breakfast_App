import React from "react";
import useCurrency from "../hooks/useCurrency";

const CartCard = ({drink}) => {
  const price = useCurrency(drink.cost)

  return (
    <div className="cart-item">
      <img
        src="https://www.acouplecooks.com/wp-content/uploads/2021/12/Lemon-Soda-004.jpg"
        alt=""
      />
      <div className="cart-info">
        <h2>{drink.name}</h2>
        <h4>{drink.base}</h4>
        <ul>
            {drink.extras.map((x) => <li>{x}</li>)}
        </ul>
      </div>
      <h4 className="colored-text">{price}</h4>
    </div>
  );
};

export default CartCard;
