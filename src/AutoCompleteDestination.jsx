import React, {Component} from 'react';
import { AutoComplete, Field } from 'material-ui';
import AppBar from 'material-ui/AppBar';
var airportsData = require('json!./../data/airport.json');
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

class AirportDestination extends Component {
  constructor(props, context) {
    super(props, context);    
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Airport destination"
          filter={ AutoComplete.caseInsensitiveFilter }
          dataSource={ airportsData }
          dataSourceConfig={ {text: 'name', value: 'lat'}  }
          onNewRequest={ this.onNewRequest.bind(this) }
          maxSearchResults={5}
        />
      </div>
    );
  }

   onNewRequest(chosenRequest, index) {
        this.props.onNameChanged(chosenRequest);      
  }
}

export default AirportDestination;