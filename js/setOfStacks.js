class SetOfStacks {
	constructor(capacity) {
		this.length = 1;
		this.numberOfStacks = 0;
		this.capacity = capacity;
		this.currentStack = 0;
		this.stacks = [[]];
	}

	push(item) {
		if (this.stacks[this.currentStack].length >= this.capacity) {
			//if items > capacity, do something else
			//update current stack to next one one
			this.currentStack++;
			this.stacks[this.currentStack] = [];

			//add item to latest stack
			this.stacks[this.currentStack].append(item);
			this.length++;
		} else {
			this.stacks[this.currentStack].push(item);
		}
	}

	pop() {
		if (this.stacks[this.currentStack].length === 1) {
			let item = this.stacks[this.currentStack].pop();
			this.currentStack--;
			this.length--;
			return item;
		} else {
			return this.stacks[this.currentStack].pop();
		}
	}

	popAt(index) {
		for (stack in this.stacks) {
		}
		return this.stacks[index];
	}
}

const stacks = new SetOfStacks(3);

stacks.push(10);

stacks.push(9);
stacks.push(8);
stacks.push(7);
console.log(stacks);
console.log(stacks.length); // should print 2

//console.log(stacks.popAt(0)); // should print 8
console.log(stacks.pop()); // should print 7
console.log(stacks.pop()); // should print 9

console.log(stacks.length); // should print 1

class Stack {
	constructor() {
		this.stack = [];
	}

	push(item) {
		this.stack.push(item);
	}

	pop() {
		return this.stack.pop();
	}
}
