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
			]
		};
	}

	deleteItem = id => {
		console.log('deleting item: ' + id);
	};
	render() {
		return (
			<div className="container">
				<header className="header">
					<h1>Giphy Collections</h1>
				</header>
				<div className="app">
					<section className="collections-container">{<Collection />}</section>
					<section className="giphy-app">
						<div className="search-container">{/* <Search /> */}</div>
						<div className="giphy-container">
							{this.state.items.map(item => (
								<Result
									key={item.id}
									item={item}
									handleDrop={id => this.deleteItem(id)}
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
