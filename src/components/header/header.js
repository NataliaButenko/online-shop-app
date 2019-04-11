import React, { Component } from 'react';
import { convertStringToSend } from "../../services/convertStringToSend";
import connect from "react-redux/es/connect/connect";
import { changeProductListAsync } from "../../store/actions/productsAction/changeProductList";
import { search } from "../../store/actions/productsAction/searchProducts";
import { productFilter } from "../../selectors/productsFilter";
import { NavbarTop } from "./navbarTop";
import { PushpinWithNavbar } from "./pushpinWithNavbar";

const navbar = {
  navbarProducts:
    [
      'Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nail polish'
    ],
  navbarListLinks:
    [
      'Shopping and payment', 'Sale', 'Confidentiality'
    ]
};

export class HeaderComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $(document).ready(() => {
      $('.parallax').parallax();
      $('.dropdown-trigger').dropdown({
        coverTrigger: false
      });
      $('.tabs').tabs();
      $('.pushpin-demo-nav').pushpin({
        top: $('.pushpin-demo-nav').offset().top,
      });
    });
  }

  displayProductsByType = (str) => {
   const { changeProductListAsync } = this.props;
   let tmp = convertStringToSend(str);
   changeProductListAsync(tmp);
  };

  search = (e) => {
    const { search } = this.props;
    search(e.target.value);
  };

  displaySelectedItem = () => {
    const { basket } = this.props;
    if(basket.length !== 0) {
      return(
        <div className='number-item'><span>{ basket.length }</span></div>
      )
    } else {
      return ''
    }
  };

  render() {
    return (
     <header>
      <div className='header-top section'>
        <NavbarTop navbarListLinks={ navbar.navbarListLinks }
                   position='right'
        />
      </div>

      <div className='parallax-container'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <h3 className='header'>Makeup</h3>
            <h4 className='header'>Beauty style</h4>
            <div className='row'>
              <p className='grey-text text-darken-3 lighten-3'>
                Phone number: 111-111-11, 222-222-22
                <br />
                Email: <a className='mailto' href='mailto:natkabutenko93@gmail.com'>hghghghg@ngng.ch</a>
                <br />
                every day from 8 to 20
              </p>
            </div>
          </div>
        </div>
        <div className='parallax'>
            <img src='http://doctorli-beauty.com/wp-content/uploads/2017/07/header-background6.jpg' alt='logo' width='1600'></img>
        </div>
      </div>

       <div className="header-bottom">
         <PushpinWithNavbar navbarProducts={ navbar.navbarProducts }
                            displayProductsByType={ this.displayProductsByType }
                            displaySelectedItem={ this.displaySelectedItem }
                            search={ this.search }
         />
       </div>

    </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: productFilter(state),
    basket: state.basket
  };
};

const mapDispatchToProps = {
  changeProductListAsync,
  search
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
