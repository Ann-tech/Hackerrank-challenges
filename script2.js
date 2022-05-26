//see instructions here - https://www.hackerrank.com/challenges/compare-the-triplets/
function compareTriplets(a, b) {
    let arr = [0, 0];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) arr[0]++ 
      else if (a[i] < b[i]) arr[1]++;
    }
    return arr;

}