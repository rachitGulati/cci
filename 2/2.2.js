class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }
  
  add(data) {
    const nodeToAdd = new Node(data);
    let nodeToCheck = this.head;
    if(!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
  get(num) {
    const nodeToCheck = this.head;
    let count = 0;
    
    if(num > this.length) return 'Doesn\'t Exist!'
    
    while(count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    return nodeToCheck;
  }
  remove(num) {
    let nodeToCheck = this.head,
        count       = 0,
        prevNode    = null;
    
    if(num > length) {
      return 'Doesn\'t Exist!';
    }
    
    if(num === 0) {
      this.head = nodeToCheck.next;
      this.length--;
      
      return this.head;
    }
    
    while(count < num) {
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.length--;
    
    return this.head;
  } 
  findKthElement(k){
    if(this.length < k){
      console.log(k + ' elements not present in the list')
      return;
    } else if( this.length === k ){
      return this.head.data;
    } else {
      let node1 = this.head;
      let node2 = this.head;
      while(k > 1){
        node1 = node1.next;
        k--;
      }
      while(node1.next){
        node1 = node1.next;
        node2 = node2.next;
      }
      return node2.data;
    }
  } 
  print(){
    let nodeToCheck = this.head;
    if(!nodeToCheck){
      console.log('List is empty');
      return;
    }
    let nodeDataArray = [];
    while(nodeToCheck.next) {
      nodeDataArray.push(nodeToCheck.data);
      nodeToCheck = nodeToCheck.next;
    }
    nodeDataArray.push(nodeToCheck.data); // Last node data
    nodeDataArray.push('NULL'); // Padding with NULL
    console.log(nodeDataArray.join(' -> '));
  }
}
const generateLinkedList = (linkedList, size) => {
  for(let i = 0; i< size; i++){
    let data = Math.floor(Math.random() * (10 - 0)) + 0;
    linkedList.add(data);
  }
}
const linkedList = new LinkedList();
generateLinkedList(linkedList, 7);
linkedList.print();
let k = 2;
console.log('From last ' + k  + 'th element is ' + linkedList.findKthElement( k ));
k = 7;
console.log('From last ' + k  + 'th element is ' + linkedList.findKthElement( k ));
