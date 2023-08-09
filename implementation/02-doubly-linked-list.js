// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1) Accessing head doesn't need to traverse n

        let newNode = new DoublyLinkedNode(val, null);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
        this.length++;
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // O(n) Accessing tail will need to traverse through all n
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        }

        let removed = this.head.value;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        }

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(1) Accessing head doesn't need to traverse n
    }

    removeFromTail() {
        if (!this.head) {
            return undefined;
        }

        let removed = this.tail.value;
        this.tail.next = null;
        this.tail = this.tail.prev;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(n) I'm still confused if accessing the tail requires traversing n
    }

    peekAtHead() {
        if (this.head) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1) Accessing head doesn't need to traverse n
    }

    peekAtTail() {
        if (this.tail) {
            return this.tail.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1) Just looking at tail without changing doesn't require traversing n?
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
