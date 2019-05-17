import React, { Component } from 'react';
import CartItem from './cartlist.js';
import Checkout from './checkout.jsx';
import PaymentForm from './payform.jsx';

function ShopCart (props){
    return (
        <div className="shopping-cart-shelf">
          <div className="header-cart">
            <h1>My Cart</h1>
          </div>
          <div className="cart-contents">
            { props.pokecart.map((i) => {
              return <CartItem
                keyValue={i.keyValue}
                name={i.name}
                img={i.img}
                price={i.price}
                onRemove={props.onRemove} />
            })}
          </div>
          < Checkout pokecart={props.pokecart}
                    onCheckout={props.onCheckout}/>
        </div>
    )
  }

export default ShopCart;
