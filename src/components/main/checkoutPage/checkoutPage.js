import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { removeCard } from "../../../store/actions/basketAction/removeCard";
import { HorizontalCardForModal } from "../../modalsIcons/modalIconBasket/horizontalCardForModal";
import { increaseCounter, decreaseCounter } from "../../../store/actions/basketAction/chengeProductCounter";
import { FormRegistrationOrder } from "./formRegistrationOrder";

export class CheckoutPageComponent extends Component {
  constructor() {
    super();
  };

  sum = (basket) => {
    return basket.reduce((done, elem) => {
      done = done + (+ elem.price * elem.counter);
      return +done.toFixed(2)
    }, 0)
  };

  render() {
    const {
      basket,
      removeCard,
      increaseCounter,
      decreaseCounter
    } = this.props;

    return(
      <div className='row center-align checkout-card'>
        <div className="col s12">
          {
            basket.map(product => {
              return(
                <HorizontalCardForModal product={ product }
                                        removeCard={ removeCard }
                                        key={ product.id + product.selectColor }
                                        increaseCounter={ increaseCounter }
                                        decreaseCounter={ decreaseCounter }
                />

              )
            })
          }
          <div className="checkout">

            <div className='row '>
              <div className='col s12 center-align order-amount'>
                <span>Final order amount: </span><span>{ this.sum(basket) } $</span>
              </div>
            </div>

            <div className='row '>
              <FormRegistrationOrder selectedProductsList={ basket }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket
  };
};

const mapDispatchToProps = {
  removeCard,
  increaseCounter,
  decreaseCounter
};

export const CheckoutPage = connect(mapStateToProps, mapDispatchToProps)(CheckoutPageComponent);
