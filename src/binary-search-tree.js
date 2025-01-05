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
		if(currentNode.data === newNode.data) return;
		if(newNode.data < currentNode.data){
			if(currentNode.left === null){
				currentNode.left = newNode;
				return;
			}
			currentNode = currentNode.left;
		} else{
			if(currentNode.right === null){
				currentNode.right = newNode;
				return;
			}
			currentNode = currentNode.right;
		}
	}
  }

  has(data){
     if(this.rootNode === null) return false;
	 let currentNode = this.rootNode;
	 while(currentNode){
		 if(data < currentNode.data){
			 currentNode = currentNode.left;
		 } else if(data > currentNode.data){
			 currentNode = currentNode.right;
		 } else {
			 return true;
		 }
	 }
	 return false;
  }

  find(data){
     if(this.rootNode === null) return null;
	 let currentNode = this.rootNode;
	 while(currentNode){
		 if(data < currentNode.data){
			 currentNode = currentNode.left;
		 } else if(data > currentNode.data){
			 currentNode = currentNode.right;
		 } else {
			 return currentNode;
		 }
	 }
	 return null;
  }

  remove(data){
    if(this.rootNode === null) return;
	let currentNode = this.rootNode;
	while(currentNode.left !== null || currentNode.right !== null){
		 if(data < currentNode.data){
			 if(data === currentNode.left.data){
				 if(currentNode.left.left !== null){
					const rightNode = currentNode.left.right;
					currentNode.left = currentNode.left.left; 
					currentNode.left.right = rightNode;
					return;
				 } else if(currentNode.left.right !== null){
					currentNode.left = currentNode.left.right; 
					return;
				 } else {
					currentNode.left = null;
					return;
				 }
			 }
			 currentNode = currentNode.left;
		 } else if(data > currentNode.data){
			 if(data === currentNode.right.data){
				 if(data === currentNode.right.data){
				 if(currentNode.right.left !== null){
					const rightNode = currentNode.right.right;
					currentNode.right = currentNode.right.left; 
					currentNode.right.right = rightNode;
					return;
				 } else if(currentNode.right.right !== null){
					currentNode.right = currentNode.right.right; 
					return;
				 } else {
					currentNode.right = null;
					return;
				 }
				}
			 }
			 currentNode = currentNode.right;
		 } else {
			 // TODO: fix
			 currentNode = null;
			 return;	
	 }
  }
  }

  min() {
   if(this.rootNode === null) return null;
   let currentNode = this.rootNode;
   while(currentNode.left !== null){
      currentNode = currentNode.left;
   }
   return currentNode.data;
  }

  max() {
   if(this.rootNode === null) return null;
   let currentNode = this.rootNode;
   while(currentNode.right !== null){
      currentNode = currentNode.right;
   }
   return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};