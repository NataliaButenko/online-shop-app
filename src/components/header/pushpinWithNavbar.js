import React, { Component } from 'react';
import { InputField } from "../sharedComponents/inputField";
import { ModalIconBasket } from "../modalsIcons/modalIconBasket/modalIconBasket";

export class PushpinWithNavbar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  showModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return(
      <nav className='pushpin-demo-nav pin-top' data-target="header-bottom" style={{'top': '0px'}}>
        <div className="nav-wrapper container">
          <div className='row'>

            <div className="left hide-on-med-and-down naw-header-bottom-left col s10">
              {
                this.props.navbarProducts.map((value, index) => {
                  return(
                    <div className='nav-item' key={ index } onClick={ () => this.props.displayProductsByType(value) }>
                      <a href="">{ value }</a>
                    </div>
                  )
                })
              }
            </div>

            <div className='right hide-on-med-and-down col s2'>
              <InputField classNameDiv='s6 search nav-item'
                          classNameInput=' '
                          classNameLabel='white-text'
                          placeholder=''
                          id='search'
                          type='text'
                          onChange={ this.props.search }
                          labelText='Search'
              />

              <div className='right nav-item ' onClick={ this.showModal }>
                <a href="" ><i className="large material-icons">add_shopping_cart</i></a>

                { this.props.displaySelectedItem() }
              </div>
            </div>

          </div>
        </div>
        <ModalIconBasket show={ this.state.showModal } close={ this.closeModal } />
      </nav>
    )
  }
}
