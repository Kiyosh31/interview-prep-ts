import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";
import { union, intersection } from "./union_and_intersection";

let list1: SinglyLinkedList<number>;
let list2: SinglyLinkedList<number>;

beforeEach(() => {
  list1 = new SinglyLinkedList<number>();
  list2 = new SinglyLinkedList<number>();
});

describe("Union", () => {
  it("10 -> 20 -> 80 -> 60 -> 15 -> 30 -> 45", () => {
    list1.insertAtTail(10);
    list1.insertAtTail(20);
    list1.insertAtTail(80);
    list1.insertAtTail(60);

    list2.insertAtTail(15);
    list2.insertAtTail(20);
    list2.insertAtTail(30);
    list2.insertAtTail(60);
    list2.insertAtTail(45);

    const result = union(list1, list2);
    expect(result.printList()).toStrictEqual([10, 20, 80, 60, 15, 30, 45]);
  });

  it("12 -> 2-> 43 -> 0 -> 41", () => {
    list1.insertAtTail(12);
    list1.insertAtTail(2);
    list1.insertAtTail(43);

    list2.insertAtTail(0);
    list2.insertAtTail(41);
    list2.insertAtTail(12);
    list2.insertAtTail(2);

    const result = union(list1, list2);
    expect(result.printList()).toStrictEqual([12, 2, 43, 0, 41]);
  });
});

describe("Intersection", () => {
  it("20 -> 60", () => {
    list1.insertAtTail(10);
    list1.insertAtTail(20);
    list1.insertAtTail(80);
    list1.insertAtTail(60);

    list2.insertAtTail(15);
    list2.insertAtTail(20);
    list2.insertAtTail(30);
    list2.insertAtTail(60);
    list2.insertAtTail(45);

    const result = intersection(list1, list2);
    expect(result.printList()).toStrictEqual([20, 60]);
  });

  it("12 -> 2", () => {
    list1.insertAtTail(12);
    list1.insertAtTail(2);
    list1.insertAtTail(43);

    list2.insertAtTail(0);
    list2.insertAtTail(41);
    list2.insertAtTail(12);
    list2.insertAtTail(2);

    const result = intersection(list1, list2);
    expect(result.printList()).toStrictEqual([12, 2]);
  });
});
