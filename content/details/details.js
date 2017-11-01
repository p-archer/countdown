import React from 'react';
import DOM from 'react-dom';
import moment from 'moment';

const timeFormat = 'DD-MM-YYYY';

const daysOff = 9 + 1 + 3; //this year, christmas, next year

class Details extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	getWorkdaysLeft() {
		let weeks = moment(this.props.dates.endDate, timeFormat).diff(moment(), 'weeks');
		let days = moment(this.props.dates.endDate, timeFormat).day() - moment().day();

		return weeks * 5 + days - daysOff;
	}

	getTimeUntilTravel() {
		return moment(this.props.dates.travelDate, timeFormat).diff(moment(), 'days');
	}

	getTimeUntilStart() {
		return moment(this.props.dates.startDate, timeFormat).diff(moment(), 'days');
	}

	render() {
		return (
			<div className='details'>
			  <h3>We have <span className='highlight'>{this.getWorkdaysLeft()}</span> workdays left.</h3>
			  <h3>We'll travel in <span className='highlight'>{this.getTimeUntilTravel()}</span> days.</h3>
			  <h3>We'll start in <span className='highlight'>{this.getTimeUntilStart()}</span> days.</h3>
			</div>
		);
	}
}

export default Details;
