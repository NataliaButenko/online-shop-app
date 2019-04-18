import React, { Component } from 'react';

export class CardProduct extends Component {

  render() {
    const { product, addProductToBasket } = this.props;
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

        <div className="card-action" onClick={ () => { addProductToBasket(product) } }>
          <span>Add to Cart</span>
        </div>

      </div>
    )
  }
}
