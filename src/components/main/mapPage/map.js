import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyGoogleMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDnPvVuRkTXB4X-F_uzzvc63D8pbxwUBSs",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 50.035478, lng: 36.221235 }}
  >
    <Marker defaultPosition={{ lat: 50.035478, lng: 36.221235 }}/>
  </GoogleMap>
);

export class Map extends Component {
  render() {
    return(
      <div className='map'>
        <b>Map</b>
        <MyGoogleMapComponent />
      </div>
    )
  }
}
