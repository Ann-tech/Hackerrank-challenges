//see instructions here - https://www.hackerrank.com/challenges/staircase/
function staircase(n) {
    // Write your code here
  let block = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= n - 1 - i) block += "#";
      else block += " ";
    }
      if (i != n - 1) block += "\n"
  }
  console.log(block);
}
