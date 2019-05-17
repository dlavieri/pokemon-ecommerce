import React, { Component } from 'react';
import { typeList } from './pokeobj.js';

function SearchBar (props) {
  return (
    <div>
      <div className="Search">
        <input
          onChange={props.onChange}
          placeholder="Gotta catch 'em all!"
          value={props.keyword}
          type="text"
        />
      </div>
      <div className="type-filter">
        <ul className="type-list">
          {props.typeList.map(type => (
            <button className={type.toLowerCase()}
                        value={type.toLowerCase()}
                        onClick={props.onClick}>
              {type}
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar;
