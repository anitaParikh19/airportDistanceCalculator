import React, {Component} from 'react';
import { AutoComplete, Field } from 'material-ui';
var airportsData = require('json!./../data/airport.json');

class AirportOrigin extends Component {
  constructor(props, context) {
    super(props, context);
}

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Airport origin"
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

export default AirportOrigin;