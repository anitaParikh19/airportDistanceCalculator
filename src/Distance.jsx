import React, {Component}  from 'react';
import TextField from 'material-ui/TextField';
import SvgIconFlight from 'material-ui/svg-icons/action/flight-takeoff';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

export default class Distance extends Component {
  constructor(props, context) {
    super(props, context);
  }

  distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return  (Math.round((dist * 0.8684) * 100) / 100);
  }
  
  calculateDist() {
    return  this.distance(this.props.coordsForOrigin.lat, this.props.coordsForOrigin.lng, this.props.coordsForDestn.lat , this.props.coordsForDestn.lng);
  }

  displayDist() {
    let result = this.calculateDist();
    if(isNaN(result)) return 0;
    else return result;
  }
  
  render() {
    return (
      <div>
        <Chip>
          <Avatar color="#444" icon={<SvgIconFlight />} />
           {this.displayDist()} {"in nautical miles"}        
          </Chip>
      </div>
    );
  }
  
}