
import React from 'react';
import '../App.css';


class Device extends React.Component {
  state = {
    deviceData: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    console.log(props.macAddress);
    window.location.href = `details/${props.macAddress}`;
  }

  render() {
    const device = this.props;
    return (
      <div >
        <button className="device" onClick={() => { this.handleClick(device) }}>
          <div className="name"><strong>Name:</strong> {device.info.name}</div>
          <div className="company"><strong>Location:</strong>{device.info.location}</div>
        </button>
      </div>
    );
  }
}


export default Device;






