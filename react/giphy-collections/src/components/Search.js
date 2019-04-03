import React from 'react';

class Search extends React.Component {
	constructor() {
		super();
		this.state = { input: '' };
	}

	handleChange = e => {
		let input = e.target.value;
		console.log(input);
		this.setState({ ...this.state, input });
	};
	render() {
		const { input } = this.state;
		return (
			<div className="search">
				<input
					type="text"
					value={this.state.input}
					onChange={e => this.handleChange(e)}
				/>
				<button onSubmit={e => this.props.handleSearch(input)}>Search</button>
			</div>
		);
	}
}

export default Search;
