/**
 * Problem Statement
 * In the findNth function, a certain N is specified as an argument.
 * You simply need to return the node itself (not the value of the node), which is N spaces away from the end of the linked list.
 *
 * Input
 * A linked list and a position n.
 *
 * Output
 * The value of the node n positions from the end. Returns null if n is out of bound.
 *
 * Sample Input
 * LinkedList = 22->18->60->78->47->39->99 and n = 3
 *
 * Sample Output
 * 47
 */

import { SinglyLinkedList } from "../../data-structures/List/singly_linked_list/singly_linked_list";

// get the length of the list
// subtract the value 5 - 3 = 2
// iterate til get there
export const findNth = (list: SinglyLinkedList<number>, n: number): number => {
  const listLength = list.size();
  const index = listLength - n;

  let current = list.head;
  for (let i = 0; i < index; i++) {
    if (current?.next !== null) {
      current = current?.next || null;
    }
  }

  return current?.data || -1;
};
