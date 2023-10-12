import { SinglyLinkedList } from "./singly_linked_list";

describe("SinglyLinkedList", () => {
  it("Should Add elements at the beginning of the list", () => {
    const list = new SinglyLinkedList();
    list.insertAtHead(0);
    list.insertAtHead(1);

    expect(list.head?.data).toStrictEqual(1);
    expect(list.head?.next?.data).toStrictEqual(0);
  });

  it("Should add element at the end of the list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(2);

    expect(list.head?.data).toStrictEqual(0);
  });

  it("Should print empty list", () => {
    const list = new SinglyLinkedList();

    expect(list.printList()).toStrictEqual([]);
  });

  it("Should print full list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    expect(list.printList()).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
