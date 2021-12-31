class Node {
  children = []
  value;

  constructor(value) {
    this.value = value;
  }

  addChild(node) {
    this.children.push(node);
    return this;
  }
}

export default Node;
