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
	addItem = id => {};
	render() {
		const { connectDropTarget, hovered, collection } = this.props;
		const items = this.props.items || [];
		const backGroundColor = hovered ? 'lightcyan' : 'white';
		return connectDropTarget(
			<div className="collection" style={{ background: backGroundColor }}>
				<p>{this.props.name}</p>
				<ul>
					{items.map(item => (
						<li>{item.name}</li>
					))}
				</ul>
			</div>
		);
		// return <div className="collection">Giphy Collection</div>;
	}
}

export default DropTarget('item', {}, collect)(Collection);
