import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<header className="header">
					<h1>Giphy Collections</h1>
				</header>
				<div className="app">
					<section className="collections-container">
						{/* {<Collection />} */}
					</section>
					<section className="giphy-app">
						<div className="search-container">{/* <Search /> */}</div>
						<div className="giphy-container">{/* <Result /> */}</div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
