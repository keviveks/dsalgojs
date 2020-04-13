# Graphs DataStructure

Graphs are collection of things and the relationships or connection between them, the data in graph are called nodes or verticles. the connection between the nodes are edges. (eg: social networking)

### 2 types
Directed Graphs (Internet Web pages)
Undirecred Graphs (Social Network)

### 3 ways
- Adjacency List
  a - b - c
  a: b
  b: a, c
  c: b
- Adjacency Matrix
  a - b - c
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
  ]
- Incidence Matrix (2d Array)
  Rows - Nodes
  Columns - Edges
  [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1],
  ]



## Graphs: Breadth First Search
## Graphs: Depth First Search
