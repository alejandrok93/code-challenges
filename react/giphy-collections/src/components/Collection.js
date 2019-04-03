import React from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		item: monitor.getItem()
	};
}

const collectionSpec = {
	drop(props, monitor, component) {
		return { component };
	}
};
class Collection extends React.Component {
	addItem = id => {};
	render() {
		const { connectDropTarget, hovered, collection } = this.props;
		const items = this.props.collection.items || [];
		const name = this.props.collection.name;
		const backGroundColor = hovered ? 'lightcyan' : 'white';

		return connectDropTarget(
			<div className="collection" style={{ background: backGroundColor }}>
				<p>{name}</p>
				<ul>
					{items.map(item => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</div>
		);
		// return <div className="collection">Giphy Collection</div>;
	}
}

export default DropTarget('item', collectionSpec, collect)(Collection);
