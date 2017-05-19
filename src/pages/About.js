import React from 'react';
import {Button} from 'react-bootstrap';
export default class About extends React.Component {
	render() {
		return(
			<div>
				<h1>About</h1>
				<Button bsStyle="success" >Press Me</Button>
			</div>
		);
	}
}