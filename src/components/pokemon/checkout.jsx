import React, { Component } from 'react';

function Checkout (props) {
  return (
    <div className="cart-buy-tray">
      <div className="cart-total">
      Total: ${props.pokecart.reduce(
        (acc, cur) => acc + cur.price, 0)}
      </div>
      <div className="button_checkout"
            onClick={props.onCheckout}>
      Checkout
      </div>
    </div>
  )
}

export default Checkout;
