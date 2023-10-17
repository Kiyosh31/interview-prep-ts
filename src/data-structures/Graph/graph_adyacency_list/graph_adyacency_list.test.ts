import { Graph } from "./graph_adyacency_list";

let graph: Graph<number>;
beforeEach(() => {
  graph = new Graph<number>(4);
});

describe("Graph Adyacency List", () => {
  it("addEdge", () => {
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.printStr()).toStrictEqual(
      `| 0 | => [ 2 ] ->[ 1 ] -> null| 1 | => [ 3 ] -> null| 2 | => [ 3 ] -> null| 3 | =>  null`
    );
  });
});
