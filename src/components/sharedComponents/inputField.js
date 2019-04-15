import React, { Component } from 'react';

export class InputField extends Component {
  render() {
    return(
      <div className={`input-field col ${ this.props.classNameDiv }` }>
        <input placeholder={ this.props.placeholder }
               id={ this.props.id }
               type={ this.props.type }
               className={`input-field__input validate validate_text_${ this.props.validateColotText }` }
               onChange={ this.props.onChange }
               value={ this.props.value } />
        <label htmlFor={ this.props.id }
               className={ `input-field__label input-field__label_text_${ this.props.labelColorText}` }>
          { this.props.labelText }
        </label>
      </div>
    )
  }
}
