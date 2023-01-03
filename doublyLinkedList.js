///////Comparisons with Singly Linked Lists//////
// - More memory === more flexibility 

class Node {
    constructor (val){
        this.val = val 
        this.next = null 
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0
    }
    push(val){ //taking a value and adding it to the end of the list 
        const newNode = new Node (val)    // create a new node with the value passed to the function
        if (!this.length === 0) {// if the head property is null set the head and tail to be the newly created node 
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode // if not, set the next property on the tail to be that node 
            newNode.prev = this.tail // set the prev property on the newly created node to be the the tail 
            this.tail = newNode  // set the tail to be the newly created node 
        }
        this.length++// increment the length 
        return this // return the list 
    }
    pop(){
        if (!this.head) return undefined //if there is no head, return undefined 
        const poppedNode = this.tail //store the current tail in a variable to return later
        if (this.length === 1) {//if the length is 1, set the head and tail to be null
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev //uodate the tail to be the prev Node 
            this.tail.next = null //set the newTail's next to be null
        }
        this.length-- //decreament the length
        return poppedNode //return the poppedNode
    }
}