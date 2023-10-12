class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
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

    if (this.isEmpty()) {
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

  search(data: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.head;
    while (current != null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  deleteAtHead() {
    if (!this.isEmpty()) {
      this.head = this.head?.next || null;
    }
  }

  deleteAtTail() {
    if (!this.isEmpty()) {
      let current = this.head;
      while (current != null) {
        if (current.next?.next === null) {
          current.next = null;
          return;
        }
        current = current.next;
      }
    }
  }

  deleteByValue(data: T) {
    if (!this.isEmpty()) {
      let current = this.head;
      while (current != null) {
        if (current.next?.data === data) {
          current.next = current.next.next;
        }
        current = current.next;
      }
    }
  }

  size(): number {
    if (this.isEmpty()) {
      return -1;
    }

    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.next;
    }

    return size;
  }
}
