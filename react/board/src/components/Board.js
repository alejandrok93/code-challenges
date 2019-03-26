import React from 'react';
import Column from './Column';

import './Board.css';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			columns: [
				{
					id: 1,
					name: 'Column 1',
					color: '#8e6e95',
					cards: [
						{ id: 1, text: 'first card!' },
						{ id: 2, text: 'second card' }
					]
				},
				{
					id: 2,
					name: 'Column 2',
					color: '#39a59c',
					cards: [
						{ id: 1, text: 'first card!' },
						{ id: 2, text: 'second card' }
					]
				},
				{
					id: 3,
					name: 'Column 3',
					color: '#344759',
					cards: [
						{ id: 1, text: 'first card!' },
						{ id: 2, text: 'second card' }
					]
				},
				{
					id: 4,
					name: 'Column 4',
					color: '#e8741e',
					cards: [
						{ id: 1, text: 'first card!' },
						{ id: 2, text: 'second card' }
					]
				}
			]
		};
	}

	deleteCard = card_id => {
		console.log('lets delete this card');
		console.log(card_id);
	};
	componentDidMount() {}
	addCard = e => {
		let column_id = parseInt(e.target.value);
		let current_column = this.state.columns.filter(column => {
			console.log(column.id);
			console.log(column_id);
			if (column.id === column_id) {
				return column;
			}
		})[0];

		console.log(current_column);

		//Prompt user with window.prompt API, save text in variable
		let text = window.prompt('Please enter your message:');

		let new_card = { id: current_column.cards.length, text };

		//Add to cards array for this column
		this.state.columns.forEach(column => {
			if (column.id === current_column.id) {
				column.cards.push(new_card);
			}
		});

		let new_columns = this.state.columns;

		console.log(new_columns);
		this.setState({ columns: new_columns });
	};

	render() {
		return (
			<div className="board-container">
				{this.state.columns.map((column, index) => (
					<Column
						key={column.id}
						column={column}
						addCard={this.addCard}
						deleteCard={this.deleteCard}
					/>
				))}
			</div>
		);
	}
}

export default Board;
