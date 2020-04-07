/*
H-Tree Construction
An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.

It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.

Here are some examples of H-trees at different levels of depth:

altdepth = 1

altdepth = 2

altdepth = 3

Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).

Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).

Constraints:

[time limit] 5000ms

[input] double x

[input] double y

[input] double length

[input] double depth

0 ≤ depth ≤ 10

*/

/*
(2, 2, 2, 3)

=> 1st H
topleft(1.3)                                  topright(3.3)

leftmid(1.2)            mid(2.2)        midright(3.2)

bottomlef(1,1)                             bottomright(3,1)

// each H shape has 6 points

in drawline function -> 
*/

function drawHTree(x, y, length, depth){  
    let resArr = [];  
  
    helper(x, y, length, depth);
    
    function helper (x, y, length, depth){
       let subArr = [
        [[x-(length/2), y + (length/2)], [x-(length/2), y - (length/2)]],
        [[x+(length/2), y + (length/2)], [x+(length/2), y - (length/2)]],
        [[x-(length/2),  y], [x+(length/2), y]]
      ];
  
      resArr = [...resArr, ...subArr];
      if (depth > 1){
        subArr.forEach(el => {
          // el => [[x-(length/2), y + (length/2)], [x-(length/2), y - (length/2)]]
          // el[0]  [x-(length/2), y + (length/2)]
          // el[0][0] el[0][1]
          // el[1][0] el[1][1]
          helper (el[0][0], el[0][1], length/2, depth-1);
          helper (el[1][0], el[1][1], length/2, depth-1);
        })
      }    
    }
    return resArr;
  };
  
  //forloop = at each el in array of points pari, pass frawLine(el)
  function drawLine(arr){
    for (let i = 0; i<arr.length; i++){
      console.log(arr[i]);    
    }
  } ;
  
  drawLine(drawHTree(2,2,1,2));
  
  // 6 points every depth => 6*4 => 6*6*4*
  // space 6^n is depth;
  // time complexity 4^n
