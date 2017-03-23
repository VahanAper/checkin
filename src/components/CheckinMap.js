import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const CheckinMap = (props) => {
  return (
    <GoogleMapLoader
      containerElement={
        <div className="map col-md-8 col-md-offset-2" />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={props.zoom || 10}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
          <Marker
            position={{ lat: props.lat, lng: props.lng }}
          />
        </GoogleMap>
      }
    />
  );
};

export { CheckinMap };
