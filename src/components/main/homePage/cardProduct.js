import React, { Component } from 'react';
import { Tooltip } from "../../sharedComponents/tooltip";

export class CardProduct extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: 'hide'
    }
  }

  addProductToBasket = () => {
    const { product, addProductToBasket } = this.props;
    if(product.price === '0.0' || product.price === null ) {
      this.setState({
        showTooltip: ''
      });
      setTimeout(() => this.setState({showTooltip: 'hide'}), 2000);
    } else {
      addProductToBasket(product);
    }
  };

  render() {
    const { product } = this.props;

    return(
      <div className="card main">

        <div className="card-image">
          <img src={ product.image_link }></img>
        </div>

        <div className="card-content">
          <div className="card-title activator grey-text text-darken-4 row">
            <div className='col s10 card-title-style'>{ product.name }</div>
            <div className='col s1 right'><i className="material-icons right">more_vert</i></div>
          </div>
          <span>{ product.price ? product.price : '0' }</span> <span>{ product.price_sign ? product.price_sign : '$' }</span>
          <div className='colors row'>
            {
              product.product_colors.map((color, index) => {
                let styleColor = {backgroundColor: color.hex_value};
                return(
                  <div className='product-color col s1' style={ styleColor } key={ index }></div>
                )
              })
            }
          </div>
        </div>

        <div className="card-reveal">
          <span className='card-title'>
            <i className="material-icons right">close</i>
          </span>
          <span className="card-title-style grey-text text-darken-4">
            { product.name }
          </span>
          <p>{ product.description }</p>
        </div>

        <div className="card-action" onClick={ this.addProductToBasket }>
          <span>Add to Cart</span>
          <Tooltip tooltipPosition='right' tooltipText='not available' hide={ this.state.showTooltip } />
        </div>

      </div>
    )
  }
}
