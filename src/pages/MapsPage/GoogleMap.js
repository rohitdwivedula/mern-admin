import React from 'react';
import Map from './Map';

let GoogleMap = () => (

  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="header">
          <h4>Google Map</h4>
        </div>
        <div className="content">
          <div style={{ width: '100%', height: '500px', boxSizing: 'border-box' }}>
            <Map
              location={{ latitude: 17.5448, longitude: 78.5719 }}
              containerElement={
                <div style={{ width: '100%', height: '100%' }} />
              }
              mapElement={
                <div style={{ height: `100%`, height: '100%' }} />
              } />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default GoogleMap;