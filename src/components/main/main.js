import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setProductsAsync } from "../../store/actions/productsAction/setProducts";
import { productFilter } from "../../selectors/productsFilter";
import { Switch, Route, Router } from 'react-router-dom';
import { CheckoutPage } from "./checkoutPage/checkoutPage";
import { HomePage } from "./homePage/homePage";
import createBrowserHistory from 'history/createBrowserHistory';
import { Loader } from "../sharedComponents/loader";
import { ShoppingEndPayment } from "./shoppingEndPaymentPage/shoppingEndPayment";
import { Confidentiality } from "./confidentialityPage/confidentiality";
import { Sale } from "./salePage/sale";
import { Stores } from "./storesPage/stores";
import { Jobs } from "./jobs/jobs";
import { Map } from "./mapPage/map";

export const history = createBrowserHistory();

export class MainComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { setProductsAsync } = this.props;
    setProductsAsync();
  }

  render() {
    const { loading } = this.props;
    return(
      <main>
        <div className='parallax-container'>

          <div className='container'>
            <Router history={ history } >
              <Switch>
                <Route path='/home' component={ HomePage }/>
                <Route path='/checkout' component={ CheckoutPage }/>
                <Route exact path='/' component={ HomePage }/>
                <Route path='/shopping_end_payment' component={ ShoppingEndPayment }/>
                <Route path='/confidentiality' component={ Confidentiality }/>
                <Route path='/sale' component={ Sale }/>
                <Route path='/stores' component={ Stores }/>
                <Route path='/jobs' component={ Jobs }/>
                <Route path='/map' component={ Map }/>
              </Switch>
            </Router>

          </div>

          <div className='parallax'>
            <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/08/11/makeup-products.jpg' alt='logo'></img>
          </div>
          { loading ? <Loader /> : '' }

        </div>

      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: productFilter(state),
    loading: state.loading
  };
};

const mapDispatchToProps = {
  setProductsAsync,
  productFilter,
};

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
