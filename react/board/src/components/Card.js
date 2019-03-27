import React from 'react';

const Card = props => {
	return (
		<div className="card">
			<span> back </span>
			<p>{props.card.text}</p>{' '}
			<span onClick={e => props.deleteCard(props.columnId, props.card.id)}>
				delete
			</span>
			<span> next </span>
		</div>
	);
};

export default Card;
