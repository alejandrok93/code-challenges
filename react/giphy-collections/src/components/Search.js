import React from 'react';

function debounce(func, delay) {
	let timeout;
	let context = this;
	let args = arguments;

	console.log('lets wait to execute search ' + delay + 'ms');

	return () => {
		clearInterval();
		timeout = setTimeout(func.apply(context, args), delay);
	};
}

class Search extends React.Component {
	constructor() {
		super();
		this.state = { input: '' };
	}

	handleChange = e => {
		let input = e.target.value;

		let callback = () => {
			return debounce(
				this.props.handleSearch.bind(this, this.state.input),
				500
			);
		};

		this.setState({ ...this.state, input });
	};

	onSubmit = e => {
		// ----- INPUT IS NOT GETTING RESET -----

		//prevent default
		e.preventDefault();

		//Call handle search function
		// this.props.handleSearch(this.state.input);
		debounce(this.props.handleSearch.bind(this, this.state.input), 500);

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
