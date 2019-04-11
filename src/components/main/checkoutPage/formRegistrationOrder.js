import React, { Component } from 'react';
import { Button } from "../../sharedComponents/button";

export class FormRegistrationOrder extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    }
  }

  onChange = (e) => {
    if(e.target.type === 'radio') {
      this.setState({
        userInfo: {...this.state.userInfo, paymentMethod: e.target.value}
      })
    } else {
      this.setState({
        userInfo: {...this.state.userInfo, [e.target.id]: e.target.value}
      })
    }
  };

  sendEndOrder = () => {
    const { selectedProductsList } = this.props;
    console.log(selectedProductsList);
  };

  render() {
    return(
      <form className="col s12">

        <div className='row'>
          <div className="input-field col s4">
            <input id="last_name" type="text" className="validate" onChange={ this.onChange }/>
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field col s4">
            <input id="first_name" type="text" className="validate" onChange={ this.onChange }/>
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s4">
            <input id="patronymic" type="text" className="validate" onChange={ this.onChange }/>
            <label htmlFor="patronymic">Patronymic</label>
          </div>
        </div>

        <div className='row payment-method'>
          <div className='col s12'>
            <p>Select a Payment Method</p>
            <div className='row'>
              <div className='col s12'>
                <label>
                  <input name="mail" type="radio" onChange={ this.onChange } value='uk mail'/>
                  <span>uk mail</span>
                </label>
              </div>
              <div className='col s12'>
                <label>
                  <input name="mail" type="radio" onChange={ this.onChange } value='new mail'/>
                  <span>new mail</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='row email-address-department'>
          <div className='col s12 '>
            <div className="input-field col s6 offset-s2">
              <input id="email" type="email" className="validate" onChange={ this.onChange } />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6 offset-s2">
              <input id="address" type="text" className="validate" onChange={ this.onChange } />
              <label htmlFor="address">
                Full address (example: Ukraine, Kharkiv region, Kharkiv city, Nauchnaya street, 5, apartment 17, index 92100)
              </label>
            </div>
            <div className="input-field col s6 offset-s2">
              <input id="department" type="number" className="validate" onChange={ this.onChange } />
              <label htmlFor="department">
                Department number
              </label>
            </div>
            <div className="input-field col s6 offset-s2">
              <input id="phone_number" type="number" className="validate" onChange={ this.onChange } />
              <label htmlFor="phone_number">
                Phone number (example: +380999999999)
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Button label='send an order' onClick={ this.sendEndOrder }/>
          </div>
        </div>
      </form>
    )
  }
}
