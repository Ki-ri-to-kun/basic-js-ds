//const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  first = null;
  last = null;
  length = 0;
  
  getUnderlyingList() {
	  return this.first;
  }

  enqueue(value) {
	const newNode = new ListNode(value);
	if(this.length === 0){
		this.first = newNode;
		this.last = newNode;
	} else {
		this.last.next = newNode;
		this.last = newNode;
	}
	this.length++;
  }

  dequeue() {
   if(this.length === 0) return;
   const temp = this.first;
   if(this.length === 1){
	  this.first = null;
	  this.last = null;
   } else {
	  this.first = this.first.next;
	  temp.next = null;
   }
   this.length--;
   return temp.value;
  }
}

module.exports = {
  Queue
};
