import React from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		item: monitor.getItem()
	};
}
class Collection extends React.Component {
	render() {
		const { connectDropTarget, hovered, item } = this.props;
		return connectDropTarget(
			<div className="collection">Giphy Collection</div>
		);
		// return <div className="collection">Giphy Collection</div>;
	}
}

export default DropTarget('item', {}, collect)(Collection);
