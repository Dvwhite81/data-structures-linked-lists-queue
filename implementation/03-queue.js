const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // O(1) Changing my mind again. Don't need to traverse n to access end
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        let removed = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return removed;
        }

        this.head = this.head.next;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // 0(1) Don't need to traverse n to access end
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
