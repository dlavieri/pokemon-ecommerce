import React from 'react';

function CartItem (props){
  return (
<div className="cartItem">
  <div className="cartItem_info">
    <img
      src={props.img}
      alt={props.name}
      onClick={props.onToggleModal}/>
    <div className="cartItem__name">
    <h3>
      {props.name}
    </h3>
    </div>
  </div>
  <div className="cartItem_buy">
    <div className="cartItem__price">
      <div className="cartItem__priceTxt">
        ${props.price}
      </div>
    </div>
    <div
      className="listItem__removeButton"
      id={props.keyValue}
      onClick={props.onRemove}>
      Remove
    </div>
    </div>
</div>
  )
}

export default CartItem;
