import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";
import { removeDuplicates } from "./remove_duplicate_list";

describe("removeDuplicates", () => {
  it("should remove dulicates", () => {
    const list = new SinglyLinkedList<number>();
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
    const list = new SinglyLinkedList<number>();
    expect(list.printList()).toStrictEqual([]);
  });
});
