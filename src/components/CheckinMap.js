import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import { geolocated } from 'react-geolocated';

class CheckinMap extends Component {
  geolocationReqired() {
    return (
      <div className="col-md-8 col-md-offset-2 bg-warning text-warning no-geolocation">
        Please allow geolocation.
      </div>
    );
  }

  render() {
    if (this.props.coords === null) {
      return this.geolocationReqired();
    }

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

const GeoMap = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(CheckinMap);

export { GeoMap };
