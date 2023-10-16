/**
 * Problem Statement
 * Union and intersection are two of the most popular operations which can be performed on data sets.
 * Now, you will be implementing them for linked lists! Let’s take a look at their definitions:
 *
 * Union
 * Given two lists A and B;
 * the union is the list that contains elements or objects that belong to either A, or to B, or to both.
 *
 * Intersection
 * Given two lists A and B, the intersection is the largest list,
 * which contains all the elements that are common to both the sets.
 *
 * Input
 * Two linked lists.
 *
 * Output
 * A list containing the union of the two lists.
 * A list containing the intersection of the two lists.
 *
 * Sample Input
 * list1 = 10->20->80->60
 * list1 = 15->20->30->60->45
 *
 * Sample Output
 * union = 10->20->80->60->15->30->45
 * intersection = 20->60
 */

import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";

export const union = (
  list1: SinglyLinkedList<number>,
  list2: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  if (list1.isEmpty()) return list2;
  if (list2.isEmpty()) return list1;

  let current = list2.head;

  while (current != null) {
    if (!list1.search(current?.data || 0)) {
      list1.insertAtTail(current.data);
    }
    current = current.next;
  }

  return list1;
};

export const intersection = (
  list1: SinglyLinkedList<number>,
  list2: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  const result = new SinglyLinkedList<number>();

  let current = list2.head;
  while (current != null) {
    if (list1.search(current.data) && !result.search(current.data)) {
      result.insertAtTail(current.data);
    }
    current = current.next;
  }

  return result;
};
