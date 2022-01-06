import kruskal from './index';
import { GraphNode }  from '../../helpers';

describe('kruskal search', () => {
  test('finds the minimum spanning tree from graph', () => {
    const node0 = new GraphNode(0);
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);
    const node4 = new GraphNode(4);
    const node5 = new GraphNode(5);
    const node6 = new GraphNode(6);

    node0.connect(node1, 7);
    node0.connect(node3, 5);

    node1.connect(node3, 9);
    node1.connect(node2, 8);
    node1.connect(node4, 7);

    node2.connect(node4, 5);

    node3.connect(node4, 15);
    node3.connect(node5, 6);

    node4.connect(node5, 8);
    node4.connect(node6, 9);

    node5.connect(node6, 11);

    const expectedPaths = [5,5,6,7,7,9]
    const shortestPaths = kruskal(node0).map(({length}) => length);

    expect(shortestPaths).toEqual(expectedPaths);
  });
});
