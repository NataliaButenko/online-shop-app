import React, { Component } from 'react';
import { Button } from "../../sharedComponents/button";
import { InputField } from "../../sharedComponents/inputField";

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
          <InputField classNameDiv='col s4'
                      id='last_name'
                      type='text'
                      labelText='Last Name'
                      onChange={  this.onChange }
                      labelColorText={ 'grey' }
                      validateColotText={ 'grey' }
          />
          <InputField classNameDiv='col s4'
                      id='first_name'
                      type='text'
                      labelText='First Name'
                      onChange={  this.onChange }
                      labelColorText={ 'grey' }
                      validateColotText={ 'grey' }
          />
          <InputField classNameDiv='col s4'
                      id='patronymic'
                      type='text'
                      labelText='Patronymic'
                      onChange={  this.onChange }
                      labelColorText={ 'grey' }
                      validateColotText={ 'grey' }
          />
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
            <InputField classNameDiv='col s6 offset-s2'
                        id='email'
                        type='email'
                        labelText='Email'
                        onChange={  this.onChange }
                        labelColorText={ 'grey' }
                        validateColotText={ 'grey' }
            />
            <InputField classNameDiv='col s6 offset-s2'
                        id='address'
                        type='text'
                        labelText='Full address (example: Ukraine, Kharkiv region, Kharkiv city, Nauchnaya street, 5,
                          apartment 17, index 92100)'
                        onChange={  this.onChange }
                        labelColorText={ 'grey' }
                        validateColotText={ 'grey' }
            />
            <InputField classNameDiv='col s6 offset-s2'
                        id='department'
                        type='text'
                        labelText='Department number'
                        onChange={  this.onChange }
                        labelColorText={ 'grey' }
                        validateColotText={ 'grey' }
            />
            <InputField classNameDiv='col s6 offset-s2'
                        id='phone_number'
                        type='number'
                        labelText='Phone number (example: +380999999999)'
                        onChange={  this.onChange }
                        labelColorText={ 'grey' }
                        validateColotText={ 'grey' }
            />
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
