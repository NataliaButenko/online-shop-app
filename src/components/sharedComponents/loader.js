import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";

export class LoaderComponent extends Component {

  render() {
    return(
      <div className="preloader-wrapper active big">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export const Loader = connect(mapStateToProps)(LoaderComponent);
