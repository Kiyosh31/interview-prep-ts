import { DoublyLinkedList } from "./doubly_linked_list";

let list: DoublyLinkedList<number>;
beforeEach(() => {
  list = new DoublyLinkedList<number>();
});

describe("DoublyLinkedList", () => {
  it("is empty", () => {
    expect(list.isEmpty()).toStrictEqual(true);
  });

  it("is not empty", () => {
    list.insert(1);

    expect(list.isEmpty()).toStrictEqual(false);
  });

  it("inserts", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.print()).toStrictEqual([1, 2, 3, 4]);
  });

  it("deletes", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.print()).toStrictEqual([1, 2, 3, 4]);
    list.delete(3);
    expect(list.print()).toStrictEqual([1, 2, 4]);
  });

  it("finds", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.find(3)).toStrictEqual(true);
  });
});
