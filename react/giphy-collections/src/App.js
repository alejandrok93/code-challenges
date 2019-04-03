import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

//Import components
import Result from './components/Result';
import Collection from './components/Collection';
import Search from './components/Search';
import GiphyContainer from './components/GiphyContainer';

//Set up API url, ----- need to remove API key and put in .env file -----
const api_key = 'Q0JJDtmMpduHC2isiGcPvMb2vRR3tWZf';

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
			collections: [
				{ id: 0, name: 'Giphy Collections', items: [] },
				{ id: 1, name: 'Fun', items: [] }
			]
		};
	}

	addItem = (item, collection_id) => {
		//Copy previous state collections to new array
		let collections = [...this.state.collections];

		//Access target collection using collection id
		let collection = collections.find(
			collection => collection.id === collection_id
		);

		//Add item to collection
		collection.items.push(item);

		//Update state
		this.setState({ collections });
	};

	handleSearch = input => {
		//Declare GIPHY Search URL
		let giphy_search_url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=`;
		//make API call to GIPHY API with input
		//http://api.giphy.com/v1/gifs/search?api_key=Q0JJDtmMpduHC2isiGcPvMb2vRR3tWZf&q=cheeseburger

		if (input.length > 0) {
			//Format search query
			input = input.replace(/ /g, '+');
			giphy_search_url = giphy_search_url + input;
			console.log(giphy_search_url);

			axios
				.get(giphy_search_url)
				.then(response => {
					const data = response.data.data;
					this.setState({ ...this.state, items: data });
				})
				.catch(err => console.log(err));
		}
		//update state with GIF results
	};
	render() {
		return (
			<div className="container">
				<header className="header">
					<h1>Giphy Collections</h1>
				</header>
				<div className="app">
					<section className="collections-container">
						{this.state.collections.map(collection => (
							<Collection collection={collection} />
						))}
						<div onClick={this.addCollection} className="new-collection">
							<p>+ Add another collection</p>
						</div>
					</section>
					<section className="giphy-app">
						<div className="search-container">
							<Search handleSearch={this.handleSearch} />
						</div>

						{/* Routes */}
						<Route
							exact
							path="/"
							component={() => (
								<GiphyContainer
									items={this.state.items}
									addItem={this.addItem}
								/>
							)}
						/>
					</section>
				</div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
