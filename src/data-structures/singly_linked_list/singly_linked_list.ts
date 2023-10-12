class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  printList(): T[] {
    const list: T[] = [];
    let current = this.head;

    if (current === null) {
      return list;
    }

    while (current != null) {
      list.push(current.data);
      current = current.next;
    }

    return list;
  }

  insertAtHead(data: T) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data: T) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current != null) {
        if (current.next === null) {
          current.next = newNode;
          break;
        }
        current = current.next;
      }
    }
  }
}
