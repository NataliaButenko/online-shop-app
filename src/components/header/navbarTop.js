import React, { Component } from 'react';
import { history } from "../main/main";

export class NavbarTop extends Component {
  onClick = (li) => {
    switch (li) {
      case "Shopping and payment": {
        history.push('/shopping_end_payment');
        return
      }
      case 'Sale': {
        history.push('/sale');
        return
      }
      case 'Confidentiality': {
        history.push('/confidentiality');
        return
      }
      default: {
        history.push('/home');
      }
    }
  };

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <ul className={`hide-on-med-and-down ${ this.props.position }`}>
              {
                this.props.navbarListLinks.map((li, index) => {
                  return(
                    <li key={ index } onClick={ () => this.onClick(li) }><a>{ li }</a></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
