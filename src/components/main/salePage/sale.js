import React, { Component } from 'react';
import { productFilter } from "../../../selectors/productsFilter";
import { addProductToBasket } from "../../../store/actions/basketAction/addProductToBasket";
import { setSalesProductsAsync } from "../../../store/actions/salesAction/setSalesProducts";
import connect from "react-redux/es/connect/connect";
import { CardProduct } from "../homePage/cardProduct";
import { ModalSelectColor } from "../../modalsIcons/modalSelectColor/modalSelectColor";


export class SalePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      show: false,
      product: {}
    }
  }

  componentDidMount() {
    const { setSalesProductsAsync } = this.props;
    setSalesProductsAsync('almay');
  }

  addProductToBasket = (product) => {
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

    const {sale,  addProductToBasket } = this.props;

    return(
      <div className='sale'>
        <div className='present'>
          <h5> Подарок при покупке любой продукции на сумму свыше 100$! </h5>
          <img src='https://secretshop.in.ua/_sh/70/7044_1.jpg' className="imgPresent"></img>
        </div>
        <div className='row'>
          <h5> Cкидка на любую продукцию бренда Nyx 10% </h5>
          {
            sale.map((product, index) => {
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
                            addProductToBasket={ addProductToBasket }
          />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    sale: state.sale,
  };
};

const mapDispatchToProps = {
  productFilter,
  addProductToBasket,
  setSalesProductsAsync
};

export const Sale = connect(mapStateToProps, mapDispatchToProps)(SalePage);
