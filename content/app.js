import React from 'react';
import DOM from 'react-dom';
import moment from 'moment';
import { remote } from 'electron';

import Details from './details/details';

import './app.less';

const dates = {
	endDate: '09-02-2018',
	startDate: '26-02-2018',
	travelDate: '12-02-2018'
};

class App extends React.Component {
	constructor() {
		super();
		this.showDetails = false;

		this.window = remote.getCurrentWindow();
		this.originalSize = this.window.getSize();

		this.setShowDetails = this.setShowDetails.bind(this);
		this.close = this.close.bind(this);
	}

	getDaysLeft() {
		return moment(dates.endDate, 'DD-MM-YYYY').diff(moment(), 'days');
	}

	close() {
		this.window.close();
	}

	setShowDetails() {
		this.showDetails = !this.showDetails;
		if (this.showDetails) {
			this.window.setSize(this.originalSize[0], 250);
		} else {
			this.window.setSize(this.originalSize[0], this.originalSize[1]);
		}

		this.forceUpdate();
		return false;
	}

	render() {
		let details = this.showDetails ? (<Details dates={dates} />) : '';
		let detailsToggle = this.showDetails ? 'hide details' : 'show details';

		return (
			<div className='main'>
			  <h3>We have <span className='highlight'>{this.getDaysLeft()}</span> days left.</h3>
			  {details}
			  <button className='' onClick={this.close}>Can't wait</button>
			  <a href='#' className='details' onClick={this.setShowDetails}>{detailsToggle}</a>
			</div>
		);
	}
}

DOM.render(<App/>, document.getElementById('app'));
