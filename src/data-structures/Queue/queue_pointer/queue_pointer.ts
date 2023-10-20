class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class QueuePointer<T> {
  front: Node<T> | null;
  back: Node<T> | null;

  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty(): boolean {
    return this.front === null;
  }

  enqueue(data: T) {
    const newNode = new Node(data);

    if (this.back !== null) {
      this.back.next = newNode;
    }
    this.back = newNode;

    if (this.front === null) {
      this.front = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) return;

    if (this.front?.data !== undefined) {
      this.front = this.front?.next;
    }

    if (this.front === null) {
      this.back = null;
    }
  }

  getFront(): T | void {
    if (this.isEmpty()) return;

    return this.front?.data;
  }

  getBack(): T | void {
    if (this.isEmpty()) return;

    return this.back?.data;
  }

  print(): T[] {
    const res = [];
    let aux = this.front;

    while (aux != null) {
      res.push(aux.data);
      aux = aux.next;
    }

    return res;
  }
}
