export class QueueArray<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  enqueue(data: T) {
    this.items.push(data);
  }

  dequeue() {
    this.items.pop();
  }

  front(): T {
    return this.items[this.items.length - 1];
  }

  print(): T[] {
    return this.items;
  }
}
