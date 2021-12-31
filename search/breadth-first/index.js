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
  if (comparator(node)) {
    return node;
  }

  return bfs(node, comparator);
}

export default bfsTree;
