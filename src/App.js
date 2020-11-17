import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config.json';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import DeviceInfo from './Components/DeviceInfo'
import DeviceList from './Components/DeviceList'
import Search from './Components/Search'


const applicationKey = Config[0].applicationKey;
const apiKey = Config[0].apiKey;

class App extends React.Component {

  state = {
    loaded: false,
    devices: [],
  };

  initDevices() {
     fetch(`https://api.ambientweather.net/v1/devices?applicationKey=${applicationKey}&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({loaded:true, devices: result});
      })
  }


  componentDidMount() {
    this.initDevices();
  }

  filterDevices(input) {
    if (input.length === 0) {
      this.initDevices();
    }
    else {
      const regex = RegExp('^' + input);
      const filteredDevices = this.state.devices.filter((device) => (regex.test(device.info.name) || (regex.test(device.info.name.toLowerCase()))));
      this.setState({ devices: filteredDevices });
    }

  }

  render() {
    if (!this.state.loaded) {
      return false;
    }
    return (
      <div>
        <h1 className="title" >{this.props.title}</h1>
        <div className="App-header">
          <Search onChange={(str) => this.filterDevices(str)} />
          <DeviceList devices={this.state.devices} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App title="List User's Devices " />
      </Route>
      <Route exact path="/details/:macaddress" component={DeviceInfo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

export default App;
