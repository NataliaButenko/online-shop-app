import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { emptyBasket } from "../../../store/actions/basketAction/emptyBasket";
import { removeCard } from "../../../store/actions/basketAction/removeCard";
import { Button } from "../../sharedComponents/button";
import { HorizontalCardForModal } from "./horizontalCardForModal";
import { history } from "../../main/main";
import { increaseCounter, decreaseCounter } from "../../../store/actions/basketAction/chengeProductCounter";

export class ModalIconBasketComponent extends Component {
  constructor() {
    super();
  }

  total = (basket) => {
    return basket.reduce((done, elem) => {
      done = done + (+ elem.price * elem.counter);
      return +done.toFixed(2)
    }, 0)
  };

  emptyBasket = () => {
    const { emptyBasket, close } = this.props;
    emptyBasket();
    close();
  };

  placeOrder = () => {
    const { close } = this.props;
    history.push('/checkout');
    close();
  };

  render() {
    const {
      basket,
      show,
      close,
      removeCard,
      increaseCounter,
      decreaseCounter } = this.props;

    //console.log('basket', basket);
    return (
      <div id="modal" className={ "modal" + (show && basket.length !== 0 ? ' showModal' : '') }>
        <div className='modal-content'>
          {
            basket.map((product, index) => {
              return (
                <div className='row center-align' key={ index }>
                  <div className="col s12">
                    <HorizontalCardForModal product={ product }
                                            removeCard={ removeCard }
                                            increaseCounter={ increaseCounter }
                                            decreaseCounter={ decreaseCounter }
                    />
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='modal-footer'>
          <div>
            <Button label='Empty the trash' className='left' onClick={ this.emptyBasket }/>
            <span className='sum'>Sum: { this.total(basket) } $</span>
            <Button label='Place your order' className='right' onClick={ this.placeOrder }/>
          </div>
        </div>

        <div className='modalClose' onClick={ () => { close() } }>
          <i className="small material-icons">clear</i>
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
  emptyBasket,
  removeCard,
  increaseCounter,
  decreaseCounter
};

export const ModalIconBasket = connect(mapStateToProps, mapDispatchToProps)(ModalIconBasketComponent);
