import React, { Component } from 'react';

export class InputField extends Component {
  render() {
    return(
      <div className={`input-field col ${this.props.classNameDiv}`}>
        <input placeholder={ this.props.placeholder }
               id={ this.props.id }
               type={ this.props.type }
               className={`validate ${ this.props.classNameInput }`}
               onChange={ this.props.onChange } />
        <label htmlFor={ this.props.id }
               className={ `${ this.props.classNameLabel }` }>
          {this.props.labelText}
        </label>
      </div>
    )
  }
}
