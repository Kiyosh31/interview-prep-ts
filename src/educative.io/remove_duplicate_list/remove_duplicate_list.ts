import { SinglyLinkedList } from "../../data-structures/singly_linked_list/singly_linked_list";

/**
 * Remove Duplicates from LinkedList
 *
 * You will now be implementing the removeDuplicates() function.
 * When a linked list is passed to this function, it removes any node that is a duplicate of an already existing node.
 *
 * Sample input
 * LinkedList = 1->2->2->2->3->4->4->5->6
 *
 * Sample Output
 * LinkedList = 1->2->3->4->5->6
 */

// O(n2)
export const removeDuplicates = (
  list: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  if (list.isEmpty()) return list;

  let current = list.head;
  while (current != null) {
    while (current.data === current.next?.data) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return list;
};
