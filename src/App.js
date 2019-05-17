import React, { Component } from 'react';
import Pokemon from './components/pokemon/pokemon.js';
import './App.css';
import pokeball from './img/pokeball.svg';
import cart from './img/shopping-cart.svg';
import ShopCart from './components/pokemon/cart.js';
import CardView from './components/pokemon/cardview.jsx';
import ListEmpty from './components/pokemon/listempty.js';
import { pokedex, inventory } from './components/pokemon/pokeobj.js';
import SearchBar from './components/pokemon/searchbar.js';
import PaymentForm from './components/pokemon/payform.jsx';

class App extends React.Component {
  state = {
      keyword: '',
      type: '',
      shopcart: 0,
      pokecart: [],
      modalKey: '',
      toggleModal: false,
      toggleCart: false,
      inventory: inventory,
      toggleCheckout: false,
    };

handleModal = (e) => {
  let modalKey = e.target.alt;
  this.setState(prevState => ({
    modalKey: modalKey,
    toggleModal: !prevState.toggleModal,
}));
  }

handleCheckout = () => {
  this.setState(prevState => ({
    toggleCheckout: !prevState.toggleCheckout,
  }));
}

  handleCart = (e)=> {
    this.setState(prevState => ({
      toggleCart: !prevState.toggleCart,
    }));
  }

  handleChange = (e)=> {
    const keyword = e.target.value.toLowerCase();
    this.setState({
      keyword: keyword,
    })
  }
  toggleType = (e) => {
    if(this.state.type == '' ) {
    this.setState({
      type: e.target.value,
   })} else {
     this.setState({
       type: '',
     })
   }
  }

  handleClear =()=> {
    this.setState({
      keyword: '',
      type: ''
    })
  }

  handleAddToCart =(e)=> {
    if (inventory[e.target.id][0].inventory < 1){return null} {
    let cartAdd = pokedex[e.target.id];
    inventory[e.target.id][0].inventory -= 1;
    this.state.pokecart.push(cartAdd);
    this.setState({
      shopcart: this.state.pokecart.length,
      inventory: inventory
    })
    console.log(inventory[e.target.id][0].inventory)
  }}

  handleRemove =(e)=> {
    let index = this.state.pokecart.findIndex(obj => obj.keyValue == e.target.id);
    inventory[e.target.id][0].inventory += 1;
    this.state.pokecart.splice(index, 1);
    this.setState({
      shopcart: this.state.pokecart.length,
      inventory: inventory,
    })
    console.log(inventory[e.target.id][0].inventory)
  }

  render() {
    let nameFiltered = this.props.pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(this.state.keyword) !== -1;
    });
    let filtered = nameFiltered.filter(pokemon => {
      return pokemon.type.toLowerCase().indexOf(this.state.type) !== -1;
    });

    let typeList = this.props.types;

    return (
      <div className="App">
      <div className="header">
        <img src={pokeball} />
        <img src= {cart}
              className="shop-cart"
              onClick={this.handleCart} />
        <div className="shop-count">
          {this.state.shopcart}
        </div>

      </div>
        {this.state.toggleCheckout ? <PaymentForm onCheckout={this.handleCheckout}/> : null}
        < SearchBar
            onClick={this.toggleType}
            onChange={this.handleChange}
            keyword={this.state.keyword}
            onClear={this.handleClear}
            typeList={typeList}
            />

      <div className="wrapper">
          { this.state.toggleModal === true ?
            <CardView
              modalKey={this.state.modalKey}
              onToggleModal={this.handleModal}/> : null }

          <div className ="list">
          {filtered.length === 0 ? <ListEmpty /> :
             filtered.map((i) => <Pokemon
                keyValue={i.keyValue}
                name={i.name}
                img={i.img}
                price={i.price}
                onClick={this.handleAddToCart}
                onToggleModal={this.handleModal}
                inventory={this.state.inventory[i.keyValue][0].inventory}
              /> ) }
          </div>
        { (this.state.toggleCart === true) && this.state.pokecart.length > 0 ?
          < ShopCart
              pokecart={this.state.pokecart}
              onRemove={this.handleRemove}
              onCheckout={this.handleCheckout}
              payModal={this.state.toggleCheckout}
              /> : null }
        </div>
      </div>
    );
  }
}





export default App;
