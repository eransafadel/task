import React from 'react';
import '../App.css';
import Config from '../config.json';


const applicationKey = Config[0].applicationKey;
const apiKey = Config[0].apiKey;


class DeviceInfo extends React.Component {

  state = {
    loaded: false,
    deviceData: []
  };

  initDeviceData(props) {
    fetch(`https://api.ambientweather.net/v1/devices/${props.match.params.macaddress}?apiKey=${apiKey}&applicationKey=${applicationKey}&endDate=&limit=288`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ loaded: true, deviceData: result });
        })
  }

  componentDidMount() {
    this.initDeviceData(this.props);
  }

  render() {
    if (!this.state.loaded)
      return false;
    else {
      return (
        <div class="row" className="background">
          <button class="col-4" className="back" onClick={() => { window.location.href = "/"; }}>Back</button>
          <h1 class="col-8" className="title" style={{color: "white"}}>Device Data</h1>

          <ul>
            <pre>
              {this.state.deviceData.map(item => <li> {JSON.stringify(item, null, 2)} </li>)}
            </pre>
          </ul>
        </div>

      );
    }

  }
}

export default DeviceInfo;