import React from 'react';

const Card = props => {
	return (
		<div className="card">
			<p>{props.card.text}</p>
		</div>
	);
};

export default Card;
