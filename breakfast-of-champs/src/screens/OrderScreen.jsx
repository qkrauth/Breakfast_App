import React from "react";

const OrderScreen = () => {
  return (
    <div className="main-page">
      <h1>Order up!</h1>
      <form action="">
        <h3>Select Size</h3>
        <div className="size-container">
          <label htmlFor="small">small</label>
          <input type="radio" id="small"/>
          <label htmlFor="medium">medium</label>
          <input type="radio" id="medium"/>
          <label htmlFor="large">large</label>
          <input type="radio" id="large"/>
          <label htmlFor="x-large">x-large</label>
          <input type="radio" id="x-large"/>
        </div>
        <select name="" id="">
            <option value="" default disabled selected >Select Base</option>
        </select>
      </form>
    </div>
  );
};

export default OrderScreen;
