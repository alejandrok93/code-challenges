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
		// Get drop target component
		const result = monitor.getDropResult();
		let collection_id;
		if (result) {
			collection_id = result.component.props.collection.id;
		}
		return props.handleDrop(props.item, collection_id);
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
		let img_url = '';
		const opacity = isDragging ? 0 : 1;

		if (item.images) {
			img_url = item.images.fixed_height.url;
		}

		return connectDragSource(
			<div className="item" style={{ opacity }}>
				<img src={img_url} alt={item.title} />
			</div>
		);
	}
}

export default DragSource('item', itemSource, collect)(Result);
