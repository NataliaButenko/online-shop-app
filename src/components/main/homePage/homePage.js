import React, { Component } from 'react';
import { CardProduct } from "./cardProduct";
import { productFilter } from "../../../selectors/productsFilter";
import { addProductToBasket } from "../../../store/actions/basketAction/addProductToBasket";
import connect from "react-redux/es/connect/connect";
import { ModalSelectColor } from "../../modalsIcons/modalSelectColor/modalSelectColor";

export class HomePageComponent extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      product: {}
    }
  }

  addProductToBasket = (product) => {
    //console.log(product);
    const { addProductToBasket } = this.props;
    if(product.product_colors.length === 0) {
      addProductToBasket(product);
    } else {
      this.setState({
        show: !this.state.show,
        product: product
      })
    }
  };

  close = () => {
    this.setState({
      show: false
    })
  };

  render() {
    const { products } = this.props;
    return(
      <div className="row">

        {
          products.map((product, index) => {
            return(
              <div className="col xl3 center-align" key={ product.id }>
              <CardProduct product={ product }
                           addProductToBasket={ this.addProductToBasket }
              />
              </div>
            )
          })
        }
        <ModalSelectColor show={ this.state.show }
                          product={ this.state.product }
                          close={ this.close }
                          addProductToBasket={ this.props.addProductToBasket }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: productFilter(state),
  };
};

const mapDispatchToProps = {
  productFilter,
  addProductToBasket
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
