## A* Pathfinding

* First published in 1968
* Extension of Dijkstra's algorithm
* Developed to help improve Shakey the Robot's pathfinding performance

---

## Some Notes
* It uses heuristics to guide its search
* We're going to use two sets (the data structure) to keep a list of explored and unexplored nodes
* The term node and square is used interchangeably in this presentation

---

## Summary of steps
0. Divide up search space into nodes
1. Add starting node to the open list
2. Repeat the following
  * Look for the lowest F cost node on the open list (hear-by referred to as the current node)
  * Move it to the closed list
  * For each adjacent node to the current node
    * Ignore it if the node isn't walkable or on the closed list
    * If it's not on the open list, add it to the open list & make the current node the parent of this node.  Record the F,G, & H costs of the square (We'll talk more about this later)
    * If it's already on the open list, check to see if this path to that square is better, using g cost as a measure.  A lower G cost means that this is a better path.  If so, change the parent of this node to be the current node & recalculate the G & F scores of the square
  * Stop when you:
    * Add the target node to the closed list (found the path)
    * Fail to find the target square & the open list is empty (there is no path)
3. Save the path.  Working backwards from the target node we go from each node to its parent until we reach the starting node. (That's your path)

---

## Step 0: Divide Search Space Into Nodes
![](./grid.png)
