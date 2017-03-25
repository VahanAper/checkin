import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class CheckinMap extends Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map col-md-8 col-md-offset-2" />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={this.props.zoom || 10}
            defaultCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
          >
            <Marker
              position={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
            />
          </GoogleMap>
        }
      />
    );
  }
}

export { CheckinMap };
