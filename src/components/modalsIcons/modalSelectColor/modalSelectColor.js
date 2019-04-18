import React, { Component } from "react";
import { Button } from "../../sharedComponents/button";

export class ModalSelectColor extends Component {
  constructor() {
    super();
    this.state = {
      selectColor: '',
      disabled: 'disabled'
    };
  }

  handleRadioChange = (e) =>{
    this.setState({
      selectColor: e.target.value ,
      disabled: ''
    });
  };

  addProductToBasket = ( product, selectColor ) => {
    const { addProductToBasket, close } = this.props;
    addProductToBasket(product, selectColor);
    this.setState({
      selectColor: '',
      disabled: 'disabled'
    });
    close();
  };

  colors = () => {
    const { product } = this.props;

    if(product.product_colors === undefined) {
      return ''
    } else {
      return product.product_colors.map((color, index) => {
        let styleColor = { backgroundColor: color.hex_value };
        return (
          <p key={ index } className='col s4'>
            <label htmlFor={ color.hex_value }>
              <input type="radio"
                     name='color'
                     id={ color.hex_value }
                     value={ color.hex_value }
                     checked={ this.state.selectColor === color.hex_value }
                     onChange={ this.handleRadioChange }

              />
              <span className='product-color' style={ styleColor }></span>
            </label>
          </p>
        )
      })
    }
  };

  render() {
    const { show, product, close } = this.props;

    return(
      <div id="" className={ "modal center modalSelectColor" + (show ? ' showModal' : '') } >
        <div className="modal-content">
          <h5>{ product.name }</h5>
          <div className='row'>
            <div className='col s5 '>
              <img src={ product.image_link } className='modal-select-color-img'></img>
            </div>
            <div className='col s4 offset-s1'>
              { this.colors() }
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button className='left'
                  label='Close'
                  onClick={ close }
          />
          <Button className={ `right ${ this.state.disabled }` }
                  label='Next'
                  onClick={ () => this.addProductToBasket(product, this.state.selectColor) }
          />
        </div>
      </div>
    )
  }
}
