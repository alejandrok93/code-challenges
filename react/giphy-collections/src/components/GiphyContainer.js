import React from 'react';

import Result from './Result';

const GiphyContainer = props => {
	return (
		<div className="giphy-container">
			{props.items.map(item => (
				<Result
					key={item.id}
					item={item}
					handleDrop={(item, collection_id) =>
						props.addItem(item, collection_id)
					}
				/>
			))}
		</div>
	);
};

export default GiphyContainer;
