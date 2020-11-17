import Device from './Device'
import React from 'react';



const DeviceList = (props) => {
	return (
		<div >
			{props.devices.map(device => <Device key={device.id} {...device} />)}
		</div>
	)
};

export default DeviceList