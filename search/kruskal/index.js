import quickSort from '../../sort/quick';

const getLength = (from, to) => from.connectedNodes[to.id].length;

const traverseGraphEdges = (node, handleEdge) => {
  const visitedNodes = new Set();
  const nodes = [];

  let currentNode = node;
  while (currentNode) {
    visitedNodes.add(currentNode);
    const relatedNodes = currentNode.getNodes();
    let relatedNode = relatedNodes.pop();

    while (relatedNode) {
      if (!visitedNodes.has(relatedNode)) {
        nodes.push(relatedNode);
        handleEdge(currentNode, relatedNode);
      }
      relatedNode = relatedNodes.pop();
    }

    currentNode = nodes.pop();
  }
};

const findGraphNode = (node, comparator, shouldVisit) => {
  const relatedNodes = node.getNodes().filter((relatedNode) => shouldVisit(node, relatedNode));

  while (relatedNodes.length) {
    let relatedNode = relatedNodes.pop();
    if (comparator(relatedNode)) {
      return relatedNode;
    }

    const nestedNode = findGraphNode(relatedNode, comparator, (...args) => {
      return args[1] !== node && shouldVisit(...args);
    });
    if (nestedNode) {
      return nestedNode;
    }
  }

  return null;
};

const kruskal = (node) => {
  const vertices = [];
  const shortestPath = [];

  traverseGraphEdges(node,
    (currentNode, relatedNode) => {
        const length = getLength(currentNode, relatedNode);
        vertices.push({from: currentNode, to: relatedNode, length});
      },
    (relatedNode, visitedNodes) => !visitedNodes.has(relatedNode))
  
  quickSort(vertices, (left, right) => left.length - right.length);

  vertices.forEach((edge) => {
    const isCycle = !!findGraphNode(edge.from,
      (relatedNode) => relatedNode === edge.to,
      (currentNode, relatedNode) => shortestPath.some(({from, to}) => (from === relatedNode && to === currentNode) || (from === currentNode && to === relatedNode)));

    if (!isCycle) {
      shortestPath.push(edge);
    }
  });

  return shortestPath;
}

export default kruskal;
