import React from 'react';
import { Button } from 'react-bootstrap';

export default class News extends React.Component {
	constructor() {
		super();
		console.log(this.props);
	}

	render() {
		return(
			<div>
				<h1>News</h1>
				<Button bsStyle="success" >Press Me</Button>
					{ self.props.location.query }
			</div>
		);
	}
}