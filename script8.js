//see instructions here - https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
    let count = 0;
    
    candles.forEach(item => {
      if (item == max) count++
    });
    return count;
}
