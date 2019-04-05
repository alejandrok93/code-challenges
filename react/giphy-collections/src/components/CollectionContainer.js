import React from 'react';
import Result from './Result';

const CollectionContainer = props => {
	const items = props.item || [];
	return (
		<div className="collection-wrapper">
			<div className="collection-gifs-container">
				{items.map(item => (
					<Result item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionContainer;
