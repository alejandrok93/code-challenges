import React from 'react';
import Card from './Card';
class Column extends React.Component {
	constructor() {
		super();
		this.state = { cards: [] };
	}
	render() {
		console.log(this.props.column.name);
		return (
			<div className="column-container">
				<h2
					className="column-name"
					style={{ backgroundColor: this.props.column.color }}
				>
					{this.props.column.name}
				</h2>
				{this.props.column.cards.map(card => (
					<Card key={card.id} card={card} deleteCard={this.props.deleteCard} />
				))}
				<button
					value={this.props.column.id}
					onClick={e => this.props.addCard(e)}
				>
					Add New Card
				</button>
			</div>
		);
	}
}

export default Column;
