// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        /*
        // O(n)
        let current = this.head;
        let count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;

        */
        // O(1)
        return this.length;

        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let current = this.head;

        while (current != null) {
            sum += current.value;
            current = current.next;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        // O(n) - Must traverse all n nodes
    }

    averageValue() {
        // Returns the average value of all the nodes
        let average = this.sumOfNodes() / this.length;
        return average;
        // Write your hypothesis on the time complexity of this method here
        // O(n) - Using sumOfNodes requires O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (count === n) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;

        // Write your hypothesis on the time complexity of this method here
        // O(n) - Worst case, have to traverse all nodes
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        let middle = Math.floor((this.length - 1) / 2);
        return this.findNthNode(middle);
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        // O(n) - Using findNthNode requires O(n)
    }

    // Added this to use for other methods
    addToHead(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        newNode.next = this.head;
        this.head = newNode;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new SinglyLinkedList;
        let current = this.head;

        while (current != null) {
            reversed.addToHead(current.value);
            current = current.next;
        }
        return reversed;

        // Write your hypothesis on the time complexity of this method here
        // O(n) - Must traverse all nodes to add to new list
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let prev = null;

        while (current != null) {
            let next = current.next;

            if (next === null) {
                this.head = current;
            }
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) - Must traverse all n to change order
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            // I pretty much recreated findNthNode to implement it the same way as singly linked.
        let middle = Math.floor((this.length - 1) / 2);
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (count === middle) {
                return current;
            }
            current = current.next;
            count++;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(n) reduced from O(n / 2) - Half of n reduces to n
    }

    // Added this to use for other methods
    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        newNode.next = this.head;
        this.head = newNode;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new DoublyLinkedList;
        let current = this.head;

        while (current != null) {
            reversed.addToHead(current.value);
            current = current.next;
        }
        return reversed;
        // Write your hypothesis on the time complexity of this method here
        // O(n) - Traverses all n nodes
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let prev = null;

        while (current != null) {
            let next = current.next;

            if (next === null) {
                this.head = current;
            }
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) - Traverses all n nodes
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
