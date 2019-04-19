import React, { Component } from 'react';

export class Tooltip extends Component {
  render() {
    return(
      <div className={ `tooltip tooltip_position-${ this.props.tooltipPosition } ${ this.props.hide }` }>
        <span>
          {this.props.tooltipText }
        </span>
      </div>
    )
  }
}
