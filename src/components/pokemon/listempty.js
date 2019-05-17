import React, { Component } from 'react';
import razz from '../../img/razz-berry.svg';

function ListEmpty(props) {
  return (
    <div className="list-empty">
    <div className="empty-card">
      <img src={razz} />
      <p>Aww sorry! It appears we don't have the item you're looking for...</p>
      <p>Have this berry, while you try another search...</p>
    </div>
    </div>
  )
}

export default ListEmpty;
