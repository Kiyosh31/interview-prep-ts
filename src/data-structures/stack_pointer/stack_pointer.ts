class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class StackPointer<T> {
  top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  push(data: T) {
    const newNode = new Node(data);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    } else {
      if (this.top?.next !== undefined) {
        this.top = this.top?.next;
      }
    }
  }

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.top?.data || null;
  }

  printStack(): T[] {
    const res = [];
    let aux = this.top;

    while (aux != null) {
      res.push(aux.data);
      aux = aux.next;
    }

    return res;
  }
}
