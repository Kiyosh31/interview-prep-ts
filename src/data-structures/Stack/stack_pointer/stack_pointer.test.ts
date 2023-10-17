import { StackPointer } from "./stack_pointer";

let stack: StackPointer<number>;
beforeEach(() => {
  stack = new StackPointer<number>();
});

describe("StackPointer", () => {
  it("is Empty", () => {
    expect(stack.isEmpty()).toStrictEqual(true);
  });

  it("is not Empty", () => {
    stack.push(0);

    expect(stack.isEmpty()).toStrictEqual(false);
  });

  it("push", () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.printStack()).toStrictEqual([3, 2, 1, 0]);
  });

  it("pop", () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();

    expect(stack.printStack()).toStrictEqual([2, 1, 0]);
  });

  it("peek", () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toStrictEqual(3);
  });
});
