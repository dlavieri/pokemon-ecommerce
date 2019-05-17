import React, { Component } from 'react';
import { pokedex }  from './pokeobj.js';


function choosePoke (arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === key)
    return i }
   };

function CardView (props) {

  const modalPoke = pokedex[choosePoke(pokedex, props.modalKey)];

  return (
    <div>
     <div className="modal-overlay">
     </div>
      <div className="card-view">
        <span
          className="close-modal"
          onClick={props.onToggleModal}>Close [x]</span>
        <div className="card-name">
          <h1>{modalPoke.name}</h1>
        </div>
        <div className="card-image">
          <img src={modalPoke.img} alt={props.name} />
        </div>
        <div className="type-wrapper">
          <div className="card-type">
            {modalPoke.type}
          </div>
        </div>
        <div className="card-description">
          {modalPoke.description}
        </div>
        <div className="card-price">
          <div className="listItem__priceTxt">
            ${modalPoke.price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardView;
