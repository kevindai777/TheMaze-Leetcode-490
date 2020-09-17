//Java Solution

class Solution {
    public boolean hasPath(int[][] maze, int[] start, int[] destination) {
        Queue<int[]> queue = new LinkedList<>();
        queue.add(start);
        int[][] directions = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        
        while (!queue.isEmpty()) {
            int[] curr = queue.remove();
            if (curr[0] == destination[0] && curr[1] == destination[1]) {
                return true;
            }
            
            for (int[] dir : directions) {
                int i = curr[0];
                int j = curr[1];
                
                while (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] != 1) {
                    i += dir[0];
                    j += dir[1];
                }
                
                i -= dir[0];
                j -= dir[1];
                
                if (maze[i][j] != 0) {
                    continue;
                }
                
                maze[i][j] = 2;
                queue.add(new int[] {i, j});
            }
        }
        
        return false;
    }
}