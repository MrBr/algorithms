const dfs = (node, comparator) => {
  if (comparator(node)) {
    return node;
  }

  for (let i = 0; i < node.children.length; i++) {
    const searchedNode = dfs(node.children[i], comparator);
    if (searchedNode) {
      return searchedNode;
    }
  }

  return null;
}

export default dfs;
