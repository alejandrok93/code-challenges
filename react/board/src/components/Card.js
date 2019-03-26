import React from 'react';

const Card = props => {
	return (
		<div className="card">
			<p>{props.card.text}</p>{' '}
			<span onClick={e => props.deleteCard(props.columnId, props.card.id)}>
				delete
			</span>
		</div>
	);
};

export default Card;
