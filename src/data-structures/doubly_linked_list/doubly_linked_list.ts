class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(
    data: T,
    next: Node<T> | null = null,
    prev: Node<T> | null = null
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insert(data: T) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail?.next !== undefined) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }

  delete(data: T) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }
      current = current.next;
    }
  }

  find(data: T): boolean {
    let aux = this.head;
    while (aux) {
      if (aux.data === data) {
        return true;
      }
      aux = aux.next;
    }

    return false;
  }

  print(): T[] {
    const res: T[] = [];
    let aux = this.head;
    while (aux) {
      res.push(aux.data);
      aux = aux.next;
    }

    return res;
  }
}
