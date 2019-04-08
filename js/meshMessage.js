class Queue {
	constructor() {
		this.queue = [];
		this.size = 0;
	}

	enqueue(item) {
		this.queue.unshift(item);
		this.size += 1;
	}

	dequeue() {
		this.size -= 1;
		return this.queue.pop();
	}
}

function bfsGetPath(graph, startNode, endNode) {
	console.log('start node: ' + startNode);
	console.log('end node: ', endNode);
	// Find the shortest route in the network between the two users -

	//Define data structures to get shortest path
	let q = new Queue();
	let visited = new Set();
	let map = {};
	let shortest_path = [];

	//Enqueue starting node
	q.enqueue([startNode]);

	while (q.size > 0) {
		//Get current node from queue remove from array
		let current_path = q.dequeue();
		let index = current_path.length - 1;
		let current_node = current_path[index];
		console.log('current node: ' + current_node);

		if (!visited.has(current_node)) {
			//Add it to list of visited nodes
			visited.add(current_node);
			let connected_nodes = graph[current_node];

			if (connected_nodes) {
				for (let i = 0; i < connected_nodes.length; i++) {
					let node = connected_nodes[i];
					console.log('---> connected node: ' + node);
					//Copy last node's path to keep track of path
					let tmp_path = [...current_path];

					//Addd latest node to path
					tmp_path.push(node);

					//Add to queue
					q.enqueue(tmp_path);
					map[node] = tmp_path;

					//Check if node is endNode, then return
					if (node === endNode) {
						console.log('found it!');
						console.log(map[node]);
						shortest_path = map[node];
						//return;
						return shortest_path;
					}
				}
			}
		}
	}

	return null;
}

// Tests
const graph = {
	a: ['b', 'c', 'd'],
	b: ['a', 'd'],
	c: ['a', 'e'],
	d: ['a', 'b'],
	e: ['c'],
	f: ['g'],
	g: ['f']
};

let desc = 'two hop path 1';
let actual = bfsGetPath(graph, 'a', 'e');
//console.log(actual);

// let expected = ['a', 'c', 'e'];
// assertDeepEqual(actual, expected, desc);

// desc = 'two hop path 2';
// actual = bfsGetPath(graph, 'd', 'c');
// expected = ['d', 'a', 'c'];
// assertDeepEqual(actual, expected, desc);

// desc = 'one hop path 1';
// actual = bfsGetPath(graph, 'a', 'c');
// expected = ['a', 'c'];
// assertDeepEqual(actual, expected, desc);

// desc = 'one hop path 2';
// actual = bfsGetPath(graph, 'f', 'g');
// expected = ['f', 'g'];
// assertDeepEqual(actual, expected, desc);

// desc = 'one hop path 3';
// actual = bfsGetPath(graph, 'g', 'f');
// expected = ['g', 'f'];
// assertDeepEqual(actual, expected, desc);

// desc = 'zero hop path';
// actual = bfsGetPath(graph, 'a', 'a');
// expected = ['a'];
// assertDeepEqual(actual, expected, desc);

// desc = 'no path';
// actual = bfsGetPath(graph, 'a', 'f');
// expected = null;
// assertDeepEqual(actual, expected, desc);

// desc = 'start node not present';
// assertThrowsError(() => {
//   bfsGetPath(graph, 'h', 'a');
// }, desc);

// desc = 'end node not present';
// assertThrowsError(() => {
//   bfsGetPath(graph, 'a', 'h');
// }, desc);

// function assertDeepEqual(a, b, desc) {
//   const aStr = JSON.stringify(a);
//   const bStr = JSON.stringify(b);
//   if (aStr !== bStr) {
//     console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
//   } else {
//     console.log(`${desc} ... PASS`);
//   }
// }

// function assertThrowsError(func, desc) {
//   try {
//     func();
//     console.log(`${desc} ... FAIL`);
//   } catch (e) {
//     console.log(`${desc} ... PASS`);
//   }
// }
