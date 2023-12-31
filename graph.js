class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let visited = new Set()
    visited.add(start)
    let stack = [start]
    let arr = []

    while(stack.length > 0) {
      let current = stack.pop()
      arr.push(current.value)

      for(let neighbors of current.adjacent) {
        if(!visited.has(neighbors)) {
          visited.add(neighbors)
          stack.push(neighbors)
          
        }
      }
    }
    return arr
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let visited = new Set()
    visited.add(start)
    let queue = [start]
    let arr = []

    while(queue.length > 0) {
      let current = queue.shift()
      arr.push(current.value)

      for(let neighbors of current.adjacent) {
        if(!visited.has(neighbors)) {
          visited.add(neighbors)
          queue.push(neighbors)
          
        }
      }
    }
    return arr
  }
}

module.exports = {Graph, Node}