//const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 
 function getNodeByIndex(list, index){
	let currentNode = list;
	for(let i = 0; i < index; i++){
		currentNode = currentNode.next;
	}
	return currentNode;
}

function getIndexByValue(list, value){
	let currentNode = list;
	let index = 0;
	
	while(currentNode){
		if(currentNode.value === value){
			return index;
		}
		currentNode = currentNode.next;
		index++;
	}
	return -1;
}


function removeKFromList(l, k) {
	let index;
	
	while(getIndexByValue(l, k)!== -1){
		index = getIndexByValue(l, k);
		if(index === 0){
			l = l.next;
		} else {
			const previousNode = getNodeByIndex(l, index - 1);
			const nodeToDelete = previousNode.next;
			previousNode.next = nodeToDelete.next;
			nodeToDelete.next = null;
		}
	}
	
	return l;
}

module.exports = {
  removeKFromList
};
