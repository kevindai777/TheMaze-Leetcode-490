//Objetive is to see if there is a valid path from a start to a destination in a maze.

let maze = 
[[0, 0, 1, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 1, 0],
 [1, 1, 0, 1, 1]
 [0, 0, 0, 0, 0]]

let start = [0, 4]
let destination = [4, 4]


//O(n^2) solution that does a BFS through the maze.

let m = maze.length 
let n = maze[0].length
let queue = [start]
let directions = [[1,0], [-1,0], [0,1], [0,-1]]
    
while (queue.length > 0) {
    let [x,y] = queue.shift()
        
    //If the destination is reached...
    if (x == destination[0] && y == destination[1]) {
        return 1
    }
        
    //Try every possible direction
    for (let [dx,dy] of directions) {
        let i = x
        let j = y
            
        //Update the x and y with a certain direction until it can go no longer
        //or if a wall is hit
        while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== 1) {
            i += dx
            j += dy
        }
         
        //Go back one space to the valid tile 
        i -= dx
        j -= dy
            
        if (maze[i][j] !== 0) {
            continue
        }
            
        //Mark the tile as visited
        maze[i][j] = 2
            
        //Try again at the new tile
        queue.push([i, j])
    }
}
    
return false