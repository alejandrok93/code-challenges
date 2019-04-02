import React from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
	beginDrag(props) {
		console.log('dragging item');
		return props.item;
	},
	endDrag(props, monitor, components) {
		if (!monitor.didDrop()) {
			return;
		}

		return props.handleDrop(props.item.id);
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	};
}

class Result extends React.Component {
	render() {
		const { isDragging, connectDragSource, item } = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(
			<div className="item" style={{ opacity }}>
				<span>{item.name}</span>
			</div>
		);

		// return <div className="item">{this.props.item.name}</div>;
	}
}

export default DragSource('item', itemSource, collect)(Result);
