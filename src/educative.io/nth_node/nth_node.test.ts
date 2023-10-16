import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";
import { findNth } from "./nth_node";

let list: SinglyLinkedList<number>;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe("findNth", () => {
  it("47", () => {
    list.insertAtTail(22);
    list.insertAtTail(18);
    list.insertAtTail(60);
    list.insertAtTail(78);
    list.insertAtTail(47);
    list.insertAtTail(39);
    list.insertAtTail(99);

    expect(findNth(list, 3)).toStrictEqual(47);
  });

  it("8", () => {
    list.insertAtTail(15);
    list.insertAtTail(22);
    list.insertAtTail(8);
    list.insertAtTail(7);
    list.insertAtTail(14);
    list.insertAtTail(21);

    expect(findNth(list, 4)).toStrictEqual(8);
  });

  it("12", () => {
    list.insertAtTail(13);
    list.insertAtTail(29);
    list.insertAtTail(34);
    list.insertAtTail(12);
    list.insertAtTail(2);

    expect(findNth(list, 2)).toStrictEqual(12);
  });

  it("29", () => {
    list.insertAtTail(13);
    list.insertAtTail(29);
    list.insertAtTail(34);
    list.insertAtTail(12);
    list.insertAtTail(2);

    expect(findNth(list, 4)).toStrictEqual(29);
  });

  it("2", () => {
    list.insertAtTail(13);
    list.insertAtTail(29);
    list.insertAtTail(34);
    list.insertAtTail(12);
    list.insertAtTail(2);

    expect(findNth(list, 1)).toStrictEqual(2);
  });

  it("34", () => {
    list.insertAtTail(13);
    list.insertAtTail(29);
    list.insertAtTail(34);
    list.insertAtTail(12);
    list.insertAtTail(2);

    expect(findNth(list, 3)).toStrictEqual(34);
  });
});
