//see instructions here - https://www.hackerrank.com/challenges/simple-array-sum/

function simpleArraySum(ar) {
    return ar.reduce((acc, item)=> acc + item, 0)
}