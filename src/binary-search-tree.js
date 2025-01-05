const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
	const newNode = new Node(data);
    if(this.rootNode === null) {
		this.rootNode = newNode;
		return;
	}
	let currentNode = this.rootNode;
	while(true){
		if(currentNode.value === newNode.value) return;
		if(currentNode.value < newNode.value){
			if(currentNode.left === null){
				currentNode.left = currentNode;
				return;
			}
			currentNode = currentNode.left;
		} else{
			if(currentNode.right === null){
				currentNode.right = currentNode;
				return;
			}
			currentNode = currentNode.right;
		}
	}
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};