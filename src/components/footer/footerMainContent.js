import React, { Component } from 'react';
import { history } from "../main/main";

export class FooterMainContent extends Component {
  onClick = (link) => {
    switch (link) {
      case 'Shipping and payment': {
        history.push('/shopping_end_payment');
        return
      }
      case 'Confidentiality': {
        history.push('/confidentiality');
        return
      }
      case 'Sale': {
        history.push('/sale');
        return
      }
      case 'Stores': {
        history.push('/stores');
        return
      }
      case 'Jobs': {
        history.push('/jobs');
        return
      }
      case 'Kharkov': {
        history.push('/map');
        return
      }
      default: {
        return
      }
    }
  };

  render() {
    return(
      Object.keys(this.props.footerLinksByContent).map((field, index) => {
        return (
          <div className="col s4 center-align" key={ index }>
            <h5 className="white-text">{ field }</h5>
            <ul>
              {
                this.props.footerLinksByContent[field].map((link, index) => {
                  return(
                    <li key={ index } onClick={ () => this.onClick(link) }>
                      <a className="grey-text text-lighten-3 link"
                         href={ link === 'hghghghg@ngng.ch'? 'mailto:natkabutenko93@gmail.com' : '' }>
                        { link }
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
    )
  }
}
