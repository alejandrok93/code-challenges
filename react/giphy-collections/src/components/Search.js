import React from 'react';
import _ from 'lodash';

function debounce(func, delay) {
	let timeout;
	let context = this;
	let args = arguments;

	console.log('lets wait to execute search ' + delay + 'ms');

	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			console.log('func apply');
			// func.apply(context, args);
		}, delay);
	};
}

class Search extends React.Component {
	constructor() {
		super();
		this.state = { input: '' };
	}

	handleChange = e => {
		let input = e.target.value;
		let debouncedSearch = _.debounce(this.props.handleSearch, 500);

		this.setState({ ...this.state, input }, debouncedSearch(input));
	};

	onSubmit = e => {
		// ----- INPUT IS NOT GETTING RESET -----

		//prevent default
		e.preventDefault();

		//Call handle search function
		this.props.handleSearch(this.state.input);

		//Clear search box
		this.setState({ input: '' });
	};
	render() {
		console.log(this.state.input);
		return (
			<div className="search">
				<form onSubmit={e => this.onSubmit(e)}>
					<input
						type="text"
						value={this.state.input}
						onChange={e => this.handleChange(e)}
					/>
					<button>Search</button>
				</form>
			</div>
		);
	}
}

export default Search;
