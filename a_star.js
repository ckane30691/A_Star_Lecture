// API for a node:
// @parent => returns a parent node
// @g => g cost of the node
// @h => h cost of the node
// @f => f cost of the node
// #getAdjacentNodes => helper method to get neighbors of current node

// We also are going to pretend we have a helper method called calculateDistance
// that will give us the Manhattan distance we need.

// We’re going to return an array of the nodes in the shortest path from the start to end node.


const AStar = (map, start, end) => {
  // openSet starts with beginning node only
  let openSet = [start];
  let closedSet = [];

  //returns an array of nodes that is the path or [] if no path found
  while (openSet.length > 0 || closedSet.includes(end)) {

    // Find node with lowest F cost
    let winner = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f <= openSet[winner].f) {
      winner = i;
      }
    }

    let current = openSet[winner];

    // remove winner node from openSet & move it to closed set
    openSet.splice(winner, 1);
    closedSet.push(current);

    // Check all the adjacent nodes
    let adjacentNodes = current.getAdjacentNodes();

    for (let i = 0; i < adjacentNodes.length; i++) {
      // current neighbor
      let neighbor = adjacentNodes[i];

      // Valid next spot?
      // make sure neighbor isn't in closed set
      if (!this.closedSet.includes(neighbor)) {
        // Is this a better path than before?
        let tempG = current.g + calculateDistance(neighbor, current);
      }

      // Is this a better path than before?
      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);

      } else if (tempG >= neighbor.g) {
        // No, it's not a better path
        continue;
      }
      neighbor.g = tempG;
      neighbor.h = this.calculateDistance(neighbor, end);
      neighbor.f = neighbor.g + neighbor.h;
      neighbor.parent = current;
    }
  }
  let resultNode = closedSet.pop();
  if (resultNode === end) {
  let path = [resultNode];
  let currNode = resultNode.parent;
  while(currNode !== null) {
    path.push(currNode);
    currNode = currNode.parent;
  }
  return path
  }
  return [];
}
