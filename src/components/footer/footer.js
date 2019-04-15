import React, { Component } from 'react';
import { Button } from "../sharedComponents/button";
import { InputField } from "../sharedComponents/inputField";
import { FooterMainContent } from "./footerMainContent";

const footerLinksByContent = {
  "Online shop": ['Sale', 'Shipping and payment', 'Confidentiality'],
  "About Us": ['Stores', 'Jobs'],
  "Contacts": ['111-111-11', '222-222-22', 'hghghghg@ngng.ch', 'Kharkov']
};

export class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <footer className="page-footer">

        <div className="container">

          <div className='row'>
            <InputField classNameDiv='s8 center-align offset-s2'
                        placeholder='Email'
                        id='email'
                        type='email'
                        labelText='Subscribe to know about new products and promotions'
                        labelColorText={ 'white' }
                        validateColotText={ 'white' }
            />
            <div className='col s12 center-align'>
              <Button label='Subscribe'/>
            </div>
          </div>
        </div>

        <div className="divider grey"></div>

        <div className="container">
          <div className="row">
            <FooterMainContent footerLinksByContent={ footerLinksByContent }/>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container center-align">
            © 2019 Makeup. Beauty style.
          </div>
        </div>

      </footer>
    )
  }
}
