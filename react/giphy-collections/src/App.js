import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import logo from './logo.svg';
import './App.css';

//Import components
import Result from './components/Result';
import Collection from './components/Collection';
class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{ id: 1, name: 'Item 1' },
				{ id: 2, name: 'Item 2' },
				{ id: 3, name: 'Item 3' },
				{ id: 4, name: 'Item 4' },
				{ id: 5, name: 'Item 5' }
			],
			collections: [{ name: 'Giphy Collections', items: [] }]
		};
	}

	addItem = id => {
		console.log('add item: ' + id);
		let collections = [...this.state.collections];
		let collection = collections[0];
		let item = this.state.items.find(item => item.id === id);
		collection.items.push(item);

		this.setState({ collections });
		// this.setState(prevState => {
		// 	let items = prevState.items;
		// 	const item = items.find(item => item.id === id);

		// 	let collection = prevState.collections[0];
		// 	collection.items.push(item);

		// 	return { ...prevState, collection };
		// });
	};
	render() {
		console.log(this.state);
		const { name, items } = this.state.collections[0];
		return (
			<div className="container">
				<header className="header">
					<h1>Giphy Collections</h1>
				</header>
				<div className="app">
					<section className="collections-container">
						{<Collection name={name} items={items} />}
					</section>
					<section className="giphy-app">
						<div className="search-container">{/* <Search /> */}</div>
						<div className="giphy-container">
							{this.state.items.map(item => (
								<Result
									key={item.id}
									item={item}
									handleDrop={id => this.addItem(id)}
								/>
							))}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
