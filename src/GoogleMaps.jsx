import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { greatPlaceStyle } from '../style/placeStyle.js';

class SimpleMap extends Component {
  constructor(){
      super();
  }

  render() {
    return (  
         <div style={{width: '100%', height: '300px'}}> 
         <GoogleMapReact
          center={ {lat: 40.09, lng: -97.71}}
          zoom={4}
         >
        { this.props.markerVisible.Avalue ?  
          <AnyReactComponent 
          lat= {this.props.originAirpt.lat}
          lng= {this.props.originAirpt.lng}
          text={"A"} 
         /> : null}
        { this.props.markerVisible.Bvalue ?  
         <AnyReactComponent 
          lat= {this.props.destnAirpt.lat}
          lng= {this.props.destnAirpt.lng}
          text={"B"} 
         /> : null}
        </GoogleMapReact>
       </div>
    );
  }
}

const AnyReactComponent = ({ text }) => (
        <div  style={greatPlaceStyle}>
          {text}
        </div>
);
export default SimpleMap;