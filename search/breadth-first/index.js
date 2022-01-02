const bfs = (node, comparator) => {
  for (let i = 0; i < node.children.length; i++) {
    const currentChild = node.children[i];
    if (comparator(currentChild)) {
      return currentChild;
    }
  }

  for (let i = 0; i < node.children.length; i++) {
    const nestedChild = bfs(node.children[i], comparator);
    if (nestedChild) {
      return nestedChild;
    }
  }

  return null;
}


const bfsTree = (node, comparator) => {
  // Avoid unnecessary if on the top of the bfs as for all nodes
  // beside the root the node is validated before going to it children
  if (comparator(node)) {
    return node;
  }

  return bfs(node, comparator);
}

export default bfsTree;
