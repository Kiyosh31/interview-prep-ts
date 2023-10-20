export class StackArray<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  getTop(): T | void {
    if (this.isEmpty()) return;

    return this.items[this.size() - 1];
  }

  push(data: T) {
    this.items.push(data);
  }

  pop() {
    this.items.pop();
  }

  peek(): T {
    return this.items[this.size() - 1];
  }

  printStack(): T[] {
    return this.items;
  }
}
