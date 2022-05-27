//see instructions here - https://www.hackerrank.com/challenges/diagonal-difference/
function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    
    for (let i = 0; i < arr.length; i++) {
      leftDiagonal += arr[i][i];
      rightDiagonal += arr[i][arr[i].length - 1 - i];
    }
    
    return Math.abs(leftDiagonal - rightDiagonal);
  
}
  