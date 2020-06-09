// 1197. Minimum Knight Moves
// Medium

// In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

// A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction,
// then one square in an orthogonal direction.

// Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

// Example 1:

// Input: x = 2, y = 1
// Output: 1
// Explanation: [0, 0] → [2, 1]
// Example 2:

// Input: x = 5, y = 5
// Output: 4
// Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]

// |x| + |y| <= 300

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// [0,0]

// [0,1]
//       0 * 0
// -> -2, 1 -> 0,1

// origin -> target (distance)

// 8 different newOrigins -> target (newDistance) (maximumNecessaryDistance between origin to target -> <= sqrt(1^2 + 2^2)) || (newDistance < previousDistance) -> this can be valid new position
///// have to add visited !!

var minKnightMoves = function (x, y) {
  const dirs = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  let queue = [];
  let seen = new Set();
  queue.push([0, 0, 0]);

  while (queue.length > 0) {
    let [preX, preY, preLvl] = queue.shift();
    let prevDistance = calculate([preX, preY], [x, y]);
    for (const dir of dirs) {
      let [dirX, dirY] = dir;
      let [curX, curY] = [dirX + preX, dirY + preY];
      let newDistance = calculate([curX, curY], [x, y]);
      if (newDistance === 0) return preLvl + 1;
      if (newDistance < prevDistance || newDistance <= Math.sqrt(5)) {
        let strCur = `${curX}-${curY}`;
        if (seen.has(strCur)) continue;
        queue.push([curX, curY, preLvl + 1]);
        seen.add(strCur);
      }
    }
  }
};

function calculate(pos1, pos2) {
  let [pos1x, pos1y] = pos1;
  let [pos2x, pos2y] = pos2;
  return Math.sqrt((pos2x - pos1x) ** 2 + (pos2y - pos1y) ** 2);
}

console.log(minKnightMoves(5, 5)); // 4
console.log(minKnightMoves(2, 1)); // 1

// class Solution(object):

//     def minKnightMoves(self, x, y):
//         if x == 0 and y == 0 :
//             return 0
//         moves = [(2,1),(1,2),(1,-2),(-2,1),(-1,2),(2,-1),(-1,-2),(-2,-1)]
//         visited = set()

//         queue = collections.deque()
//         queue.appendleft((0,0,0))
//         visited.add((0,0))

//         while queue:
//             for i in range(len(queue)):
//                 startX, startY ,steps = queue.pop()
//                 if startX == abs(x) and startY == abs(y):
//                     return steps
//                 for xc,yc in moves:
//                     nx = startX + xc
//                     ny = startY + yc

//                     if (nx,ny) not in visited and nx > -4 and ny > -4 :
//                         visited.add((nx,ny))
//                         queue.appendleft((nx,ny,steps+1))
