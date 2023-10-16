import { QueueArray } from "./queue_array";

let queue: QueueArray<number>;
beforeEach(() => {
  queue = new QueueArray<number>();
});

describe("QueueArray", () => {
  it("isEmpty", () => {
    expect(queue.isEmpty()).toStrictEqual(true);
  });

  it("enqueue", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.print()).toStrictEqual([0, 1, 2]);
  });

  it("dequeue", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();

    expect(queue.print()).toStrictEqual([0, 1]);
  });

  it("front", () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.front()).toStrictEqual(2);
  });
});
