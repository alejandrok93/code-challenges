import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

class App extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				{
					id: 0,
					title: ' Create to do app',
					completed: false
				},
				{
					id: 1,
					title: 'Figure out this weird bug',
					completed: false
				}
			],
			input: ''
		};
	}

	onChange = e => {
		// console.log(e.target.value);
		this.setState({ ...this.state, input: e.target.value });
	};

	addTask = e => {
		e.preventDefault();

		const newTask = {
			id: this.state.tasks.length++,
			title: this.state.input,
			completed: false
		};

		//console.log('lets add this task! ' + newTask.title);
		this.setState({
			tasks: [
				...this.state.tasks,
				{
					id: this.state.tasks.length++,
					title: this.state.input,
					completed: false
				}
			],
			input: ''
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<h1>To Do App!</h1>
				<div className="todo-controls">
					<input
						value={this.state.newTask}
						onChange={e => this.onChange(e)}
						type="text"
					/>
					<button onClick={e => this.addTask(e)}>Add Task</button>
					<button>Clear Completed</button>
				</div>
				<div className="tasks-container">
					<ul>
						{this.state.tasks.map(task => (
							<Task task={task} />
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
