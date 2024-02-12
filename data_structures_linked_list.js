/**the requirement is to implement a linked list that performs
 * insertion deletion operation from front end and any specific 
 * position and get the size of the linked list
 */
class Node {
  // Node constructor to create a new node with data and a reference to the next node (default is null)
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // LinkedList constructor to initialize an empty linked list with a null head
  constructor() {
    this.head = null;
  }

  // Insert at the front of the linked list
  insertAtFront(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the end of the linked list
  insertAtEnd(data) {
    const newNode = new Node(data);

    // If the linked list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse to the end of the linked list and add the new node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Insert at a specific position in the linked list
  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    const newNode = new Node(data);

    // Insert at the front if the position is 0
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse to the specified position and insert the new node
    let current = this.head;
    let count = 0;
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Invalid position");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Delete the first node from the front of the linked list
  deleteFromFront() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;
  }

  // Delete the last node from the end of the linked list
  deleteFromEnd() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // If there is only one node, set the head to null
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // Traverse to the end and remove the last node
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  // Delete a node from a specific position in the linked list
  deleteFromPosition(position) {
    if (!this.head || position < 0) {
      console.log("Invalid position");
      return;
    }

    // Delete from the specified position
    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    // Traverse to the specified position and delete the node
    let current = this.head;
    let count = 0;
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current || !current.next) {
      console.log("Invalid position");
      return;
    }

    current.next = current.next.next;
  }

  // Get the size of the linked list
  getSize() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.insertAtFront(3);
linkedList.insertAtFront(2);
linkedList.insertAtFront(1);

linkedList.printList(); // Output: 1, 2, 3

linkedList.insertAtEnd(4);
linkedList.printList(); // Output: 1, 2, 3, 4

linkedList.insertAtPosition(5, 2);
linkedList.printList(); // Output: 1, 2, 5, 3, 4

linkedList.deleteFromFront();
linkedList.printList(); // Output: 2, 5, 3, 4

linkedList.deleteFromEnd();
linkedList.printList(); // Output: 2, 5, 3

linkedList.deleteFromPosition(1);
linkedList.printList(); // Output: 2, 3

console.log("Size:", linkedList.getSize()); // Output: Size: 2