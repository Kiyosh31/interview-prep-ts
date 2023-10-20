import { QueuePointer } from "./queue_pointer";

let queue: QueuePointer<number>;
beforeEach(() => {
  queue = new QueuePointer<number>();
});

describe("QueuePointer", () => {
  it("is Empty", () => {
    expect(queue.isEmpty()).toStrictEqual(true);
  });

  it("is not Empty", () => {
    queue.enqueue(1);

    expect(queue.isEmpty()).toStrictEqual(false);
  });

  it("push", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.print()).toStrictEqual([0, 1, 2, 3]);
  });

  it("pop", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();

    expect(queue.print()).toStrictEqual([1, 2, 3]);
    queue.dequeue();
    expect(queue.print()).toStrictEqual([2, 3]);
  });

  it("getFront", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getFront()).toStrictEqual(1);
    queue.dequeue();
    expect(queue.getFront()).toStrictEqual(2);
  });

  it("getFront empty", () => {
    expect(queue.getFront()).toStrictEqual(undefined);
  });

  it("getBack", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getBack()).toStrictEqual(3);
    queue.enqueue(4);
    expect(queue.getBack()).toStrictEqual(4);
  });

  it("getBack empty", () => {
    expect(queue.getBack()).toStrictEqual(undefined);
  });
});
