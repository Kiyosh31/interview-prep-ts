import { SinglyLinkedList } from "../../List/singly_linked_list/singly_linked_list";

export class Graph<T> {
  vertices: number;
  list: SinglyLinkedList<T>[];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.list = [];

    //Creating a new LinkedList for each vertex/index of the list
    for (let i = 0; i < vertices; i++) {
      let temp = new SinglyLinkedList<T>();
      this.list.push(temp);
    }
  }

  addEdge(source: number, destination: number) {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].insertAtHead(destination as T);
    }
  }

  print() {
    console.log(">>Adjacency List of Directed Graph<<");

    let word = "";
    for (let i = 0; i < this.list.length; i++) {
      word += `| ${String(i)} | => `;
      let temp = this.list[i].head;
      while (temp != null) {
        word += `[ ${String(temp.data)} ] ->`;
        temp = temp.next;
      }
      word += " null \n";
    }
    console.log(word);
  }

  printStr(): string {
    let word = "";
    for (let i = 0; i < this.list.length; i++) {
      word += `| ${String(i)} | => `;
      let temp = this.list[i].head;
      while (temp != null) {
        word += `[ ${String(temp.data)} ] ->`;
        temp = temp.next;
      }
      word += " null";
    }

    return word;
  }
}
