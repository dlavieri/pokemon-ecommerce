import React, { Component} from 'react';

function Pokemon (props){
  return (
<div className={props.inventory < 1 ? "outOfStock" : "listItem"}>
    <img
      src={props.img}
      alt={props.name}
      onClick={props.onToggleModal}/>
    <h3 className="listItem__name">
      {props.name}
    </h3>
    <div className="listItem__price">
      <div className="listItem__priceTxt">
        ${props.price}
      </div>
    </div>
    <div
      className={props.inventory < 1 ? "disableButton" : "listItem__addButton"}
      onClick={props.onClick}
      id={props.keyValue}>
      Add to Cart
    </div>

</div>
  )
}

export default Pokemon;
