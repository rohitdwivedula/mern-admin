import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

const Map = ({
  location
}) => (
  <div>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: location.latitude, lng: location.longitude }}
    />
  </div>
);

export default withGoogleMap(Map);