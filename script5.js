//see instructions here - https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
  
  let ratio = [positive, negative, zero];
  
  ratio.forEach(num => console.log(+(num / arr.length).toFixed(6)));
}
