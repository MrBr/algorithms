class GraphNode {
  id;
  connectedNodes = {};

  constructor(id) {
    this.id = id;
  }

  connect(node, length) {
    this.connectedNodes[node.id] = { node, length };
    node.onConnected(this);
  }

  onConnected(node) {
    const length = node.connectedNodes[this.id].length;
    this.connectedNodes[node.id] = { node, length };
  }

  getNodes() {
    return Object.values(this.connectedNodes).map(({node}) => node);
  }

}

export default GraphNode;
