import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { className, onClick, label } = this.props;
    return(
      <div className={`waves-effect waves-light btn-small subscribe button ${ className }`}
         onClick={ onClick }
      >
        { label }
      </div>
    )
  }
}
