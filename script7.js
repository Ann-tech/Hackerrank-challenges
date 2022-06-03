//see instructions here - https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
    // Write your code here
  let min = [...arr].sort((a, b) => b - a).slice(1).reduce((sum, item) => sum + item, 0);
  let max = [...arr].sort((a, b) => a - b).slice(1).reduce((sum, item) => sum + item, 0);
  console.log(`${min} ${max}`);
}
