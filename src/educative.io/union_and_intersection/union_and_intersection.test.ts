import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";
import { union, intersection } from "./union_and_intersection";

let list1: SinglyLinkedList<number>;
let list2: SinglyLinkedList<number>;

beforeEach(() => {
  list1 = new SinglyLinkedList<number>();
  list2 = new SinglyLinkedList<number>();

  list1.insertAtTail(10);
  list1.insertAtTail(20);
  list1.insertAtTail(80);
  list1.insertAtTail(60);

  list2.insertAtTail(15);
  list2.insertAtTail(20);
  list2.insertAtTail(30);
  list2.insertAtTail(60);
  list2.insertAtTail(45);
});

describe("Union", () => {
  it("should joined two linkedlists", () => {
    const result = union(list1, list2);
    expect(result.printList()).toStrictEqual([10, 20, 80, 60, 15, 30, 45]);
  });
});

describe("Intersection", () => {
  it("should intersect 2 linkedlist", () => {
    const result = intersection(list1, list2);
    expect(result.printList()).toStrictEqual([20, 60]);
  });
});
