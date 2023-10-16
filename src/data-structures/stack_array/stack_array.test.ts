import { StackArray } from "./stack_array";

let stack: StackArray<number>;
beforeEach(() => {
  stack = new StackArray<number>();
});

describe("StackArray", () => {
  it("is Empty", () => {
    expect(stack.isEmpty()).toStrictEqual(true);
  });

  it("is not Empty", () => {
    stack.push(1);

    expect(stack.isEmpty()).toStrictEqual(false);
  });

  it("size", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toStrictEqual(2);
  });

  it("getTop", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.getTop()).toStrictEqual(2);
  });

  it("push", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.printStack()).toStrictEqual([1, 2, 3, 4]);
  });

  it("pop", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.pop();

    expect(stack.printStack()).toStrictEqual([1, 2, 3]);
  });

  it("peek", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.peek()).toStrictEqual(4);
    expect(stack.printStack()).toStrictEqual([1, 2, 3, 4]);
  });
});
