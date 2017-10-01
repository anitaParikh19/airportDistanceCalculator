import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import AutoCompleteOrigin from './AutoCompleteOrigin.jsx';
import AutoCompleteDestination from './AutoCompleteDestination.jsx';
import AppBar from 'material-ui/AppBar';
import ResultInMiles from './Distance.jsx';
import Map from './GoogleMaps.jsx';

injectTapEventPlugin();

export default class MainComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

     this.state = {
        airportOrigin: {},
        airportDestination: {},
        markerMapVisiblity:{Avalue:false, Bvalue:false}
      };
  }

  handleStateChangeOrigin(newAirportOrigin) {
   this.setState(function (prevState) {
     return { 
       airportOrigin: newAirportOrigin, 
       markerMapVisiblity: {Avalue:true, Bvalue:prevState.markerMapVisiblity.Bvalue
      }}})
  }

  handleStateChangeDestn(newAirportDestination) {
   this.setState( function (prevState) {
     return { 
       airportDestination: newAirportDestination, 
       markerMapVisiblity: {Avalue:prevState.markerMapVisiblity.Avalue, Bvalue:true 
      }}})
  }
  
  render() {
    return (
      <div>
        <AppBar title="Find Distance between Aiport"/>
        <AutoCompleteOrigin airportOrigin={this.state.airportOrigin}  onNameChanged={this.handleStateChangeOrigin.bind(this)}/>
        <AutoCompleteDestination  airportDestination={this.state.airportDestination} onNameChanged={this.handleStateChangeDestn.bind(this)}/>
        <ResultInMiles  coordsForOrigin = {this.state.airportOrigin}  coordsForDestn = {this.state.airportDestination} />
        <br/>
        <Map originAirpt = {this.state.airportOrigin}  destnAirpt = {this.state.airportDestination}  markerVisible= {this.state.markerMapVisiblity}/>
      </div>
    );
  }
}



