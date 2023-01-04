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
    pop(){ //remove from the END of the list 
        if (!this.head) return undefined //if there is no head, return undefined 
        const poppedNode = this.tail //store the current tail in a variable to return later
        if (this.length === 1) {//if the length is 1, set the head and tail to be null
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev //uodate the tail to be the prev Node 
            this.tail.next = null //set the newTail's next to be null
            poppedNode.prev = null //this to make sure the tail after pop wont have any value lingering to it 
        }
        this.length-- //decreament the length
        return poppedNode //return the poppedNode
    }
    shift(){ //remove from the begining 
        if (this.length === 0) return undefined //edge case 
        const oldHead = this.head 
        if (this.length === 1){ //edge case
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null 
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){ //adding a node to the beginind of the list 
        const newHead = new Node (val)
        if (this.length === 0){
            this.head = newHead
            this.tail = newHead
        } else {
            this.head.prev = newHead 
            newHead.next = this.head 
            this.head = newHead
        }
        this.length++
        return this
    }
}