import React from 'react';

const debounce = (func, delay) => {
	let timeout;
	let context = this,
		args = arguments;
	return () => {
		clearInterval();
		timeout = setTimeout(func.apply(context, args), delay);
	};
};

class Search extends React.Component {
	constructor() {
		super();
		this.state = { input: '' };
	}

	handleChange = e => {
		let input = e.target.value;
		this.setState({ ...this.state, input });
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
