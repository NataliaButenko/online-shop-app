import React, { Component } from 'react';
import { Button } from "../../sharedComponents/button";

export class HorizontalCardForModal extends Component {
  constructor() {
    super();
  }

  showProductColor = () => {
    const { product } = this.props;
    if(product.selectColor) {
      return(
        <div className='col s12 selectColor' style={ { backgroundColor: product.selectColor } }>
          <span className=''> </span>
        </div>
      )
    } else {
      return ''
    }
  };

  sum = () => {
    const { product } = this.props;
    let tmp = (+product.price || 0) * product.counter;
    return tmp.toFixed(2);
  };

  render() {
    const {
      product,
      increaseCounter,
      decreaseCounter,
      removeCard } = this.props;
    return(
      <div className="card horizontal">

        <div className="card-image col s3 left">
          <img src={product.image_link} />
        </div>

        <div className="card-content col s6 center">
          <div className='col s12 productName'>{ product.name }</div>
          <div className='col s12'>{ product.description }</div>
        </div>

        <div className="card-action col s3 right">

          <div className='row'>
            <div className='col s12 counter'>
              <Button label='-' onClick={ () => decreaseCounter(product) } className='counterBtn' />
              <span>{ product.counter }</span>
              <Button label='+' onClick={ () => increaseCounter(product) } className='counterBtn' />
            </div>
            { this.showProductColor() }
            <div className='col s12 price'>
              <div className=''>Price:</div>
              <div>
                <span>{ this.sum() }</span>
                <span>{ product.price_sign ? product.price_sign : '$' }</span>
              </div>
            </div>
          </div>

        </div>

        <div className='remove-card'>
          <i className="small material-icons" onClick={ () => removeCard(product.id, product.selectColor) }>clear</i>
        </div>

      </div>
    )
  }
}
