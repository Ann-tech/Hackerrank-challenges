//see instructions here - https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
  let splitTime = [s.slice(0, 2), s.slice(3, 5), s.slice(6, 8), s.slice(-2)];
  
  if (splitTime[3] == "AM") {
      return `0${+splitTime[0] % 12}:${splitTime[1]}:${splitTime[2]}`;
  } else if (splitTime[3] == "PM" && splitTime[0] >= 1 && splitTime[0] < 12) {
    return `${+splitTime[0] + 12}:${splitTime[1]}:${splitTime[2]}`;
  }
  return `${splitTime[0]}:${splitTime[1]}:${splitTime[2]}`
}
