const Graph = require('../src/graph');

describe('graph', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();
  });

  it('노드를 저장할 수 있어야 합니다', function () {
    graph.addNode(1);
    expect(graph.contains(1)).toEqual(true);
  });

  it('노드를 삭제할 수 있어야 합니다', function () {
    graph.addNode(2);
    expect(graph.contains(2)).toEqual(true);
    graph.removeNode(2);
    expect(graph.contains(2)).toEqual(false);
  });

  it('빈 그래프에 removeNode 연산을 적용해도 에러가 발생하지 않아야 합니다', function () {
    expect(function () {
      graph.removeNode(2);
    }).not.toThrow();
  });

  it('두 노드 사이에 간선을 추가할 수 있어야 합니다', function () {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).toEqual(true);
    expect(graph.hasEdge(2, 3)).toEqual(true);
    expect(graph.hasEdge(3, 1)).toEqual(false);
  });

  it('두 노드 사이의 간선을 제거할 수 있어야 합니다', function () {
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(2, 3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(2, 3)).toEqual(true);
    expect(graph.hasEdge(3, 2)).toEqual(true);
    graph.removeEdge(2, 3);
    expect(graph.hasEdge(2, 3)).toEqual(false);
    expect(graph.hasEdge(3, 2)).toEqual(false);

    expect(graph.hasEdge(4, 5)).toEqual(true);
    expect(graph.hasEdge(5, 4)).toEqual(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).toEqual(false);
    expect(graph.hasEdge(5, 4)).toEqual(false);
  });

  it('노드를 삭제할 경우, 해당 노드와 연결된 간선을 전부 제거해야 합니다', function () {
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    graph.addEdge(5, 2);
    expect(graph.hasEdge(2, 5)).toEqual(true);
    expect(graph.hasEdge(3, 5)).toEqual(false);
    expect(graph.hasEdge(4, 5)).toEqual(true);
    graph.removeNode(5);
    expect(graph.hasEdge(5, 2)).toEqual(false);
    expect(graph.hasEdge(5, 3)).toEqual(false);
    expect(graph.hasEdge(5, 4)).toEqual(false);
  });
});