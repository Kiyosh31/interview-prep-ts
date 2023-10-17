import { SinglyLinkedList } from "../../data-structures/List/singly_linked_list/singly_linked_list";
import { removeDuplicates } from "./remove_duplicate_list";

let list: SinglyLinkedList<number>;

beforeEach(() => {
  list = new SinglyLinkedList<number>();
});

describe("removeDuplicates", () => {
  it("should remove dulicates", () => {
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(2);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);
    list.insertAtTail(4);
    list.insertAtTail(5);
    list.insertAtTail(6);

    const newList = removeDuplicates(list);
    expect(newList?.printList()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should return null", () => {
    expect(list.printList()).toStrictEqual([]);
  });
});
