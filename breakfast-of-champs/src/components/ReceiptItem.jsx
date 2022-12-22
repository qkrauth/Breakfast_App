import React from "react";
import { Link } from "react-router-dom";
import useCurrency from "../hooks/useCurrency";

const ReceiptItem = ({drink}) => {
    let extras = drink.extras.map((x) => <li>{x}</li>)
    let price = useCurrency(drink.cost)

    return (
        <div className="receipt-item">
            <div>
                <p>{drink.size} {drink.base}</p>
                <ul>
                    {extras}
                </ul>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default ReceiptItem;