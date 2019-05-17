import React, { Component } from 'react';
import amex from '../../img/amex.gif';
import mastercard from '../../img/mastercard.gif';
import visa from '../../img/visa.gif';


class PaymentForm extends React.Component {
  state = {
    cardnum: '',
    cardnumValid: true,
    email: '',
    emailValid: true,
  }

  handleInput = (e) => {
    const cardnum = e.target.value;
    this.setState({
      cardnum: cardnum,
    });
  }

  handleEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email:email,
    })
  }

  validateEmail = () =>{
    const email = this.state.email;
    const regex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.\w/;
    this.setState({
      emailValid: regex.test(email)
    })
  }

  validateCC = () => {
    const cardnum = this.state.cardnum;
    const regex = /\d{16}/;
    this.setState({
      cardnumValid: regex.test(cardnum)
    });
  }

  render () {
  return (
    <div>
      <div className="modal-overlay">
      </div>
      <div className="payment-form">
      <div className="name-input">
        <input type ="text" placeholder="Name" />
      </div>
      <div className="address-input">
        <div>
          <input type="text" placeholder="Address 1"/>
        </div>
        <div>
          <input type="text" placeholder="Address 2"/>
        </div>
        <div>
          <input type="text" placeholder="State/Province"/>
        </div>
        <div>
          <input type="text" placeholder="Country"/>
        </div>
        <div>
          <input type="number" placeholder="Zipcode"/>
        </div>
      </div>
      <div className="contact-input">
        <input type="text" placeholder="Email Address"
                onBlur={this.validateEmail}
                onChange={this.handleEmail}
                className={this.state.emailValid ? null : "invalid"}/>
      </div>

      <div className="payment-card-info">
      <div className="card-number">
        <div>
          <input type="number" placeholder="XXXX XXXX XXXX XXXX"
                  onBlur={this.validateCC}
                  onChange={this.handleInput}
                  className={this.state.cardnumValid ? null : "invalid"}/>
        </div>
        <div className="card-types">
          <div className={this.state.cardnum.toString()[0] === '4' ? null : "visa"}>
            <img src={visa}/>
          </div>
          <div className={this.state.cardnum.toString().substring(0,2) === '51' ||
              this.state.cardnum.toString().substring(0,2) === '52' ||
              this.state.cardnum.toString().substring(0,2) === '53'||
              this.state.cardnum.toString().substring(0,2) === '54'  ? null:"mastercard"} >
            <img src={mastercard}/>
          </div>
          <div className={this.state.cardnum.toString().substring(0,2) === '34'||
                    this.state.cardnum.toString().substring(0,2) === '37'? null : "amex"}>
            <img src={amex}/>
          </div>
        </div>
        <div className="card-CVV">
          <input type="number" placeholder="CVV"/>
        </div>
        <div className="card-expiration">
          <input type="number" placeholder="MM YY"/>
        </div>
        <div className="submit-button"
              onClick={this.props.onCheckout}>
        Submit
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
}

// CardNumber split into 4 inputs of 4 (or autospaced by 4s)

// .next('input').focus ???

export default PaymentForm;
