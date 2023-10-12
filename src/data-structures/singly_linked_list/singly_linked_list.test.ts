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

  it("should find the element in list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    expect(list.search(2)).toStrictEqual(true);
  });

  it("should not find the element in list", () => {
    const list = new SinglyLinkedList();
    expect(list.search(2)).toStrictEqual(false);
  });

  it("should delete the first element on the list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    list.deleteAtHead();
    expect(list.printList()).toStrictEqual([1, 2, 3, 4]);
  });

  it("should delete the last element on the list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    list.deleteAtTail();
    expect(list.printList()).toStrictEqual([0, 1, 2, 3]);
  });

  it("should delete the first element on the list", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    list.deleteByValue(2);
    expect(list.printList()).toStrictEqual([0, 1, 3, 4]);
  });

  it("should Should retrieve the length of the list (5)", () => {
    const list = new SinglyLinkedList();
    list.insertAtTail(0);
    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);
    list.insertAtTail(4);

    expect(list.size()).toStrictEqual(5);
  });

  it("should Should retrieve -1 the list is empty", () => {
    const list = new SinglyLinkedList();
    expect(list.size()).toStrictEqual(-1);
  });
});
