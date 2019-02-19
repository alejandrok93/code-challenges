function isLinkedListPalindrome(node) {
	let stack = [];
	tmp_node = node;
	while (tmp_node) {
		stack.push(tmp_node.value);
		tmp_node = tmp_node.next;
	}

	for (let i = 0; i < stack.length; i++) {
		let item = stack.pop();
		let item2 = node.value;

		//console.log(`${item} is equal to ${item2}`);

		if (item != item2) {
			return false;
		}
		node = node.next;
	}
	return true;
}

class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(2);
const e = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

// isLinkedListPalindrome(a);   // should return true
// isLinkedListPalindrome(b);   // should return false since now the 'a' node is not included in the linked list

//console.log(c)
console.log(isLinkedListPalindrome(b));

console.log(isLinkedListPalindrome(w));
