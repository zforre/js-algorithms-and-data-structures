// time isnt the most reliable test 
// Rather than counting seconds count the number of simple operations

// SOLUTION 1
// n additions n assignments n comparisons || operations run everytime it loops
// 5n + 2
// O(n)
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//       total += i;
//     }
//     return total
// }

// SOLUTION 2
// always three operations * + /
// O(1)
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// testing performance of each solution with time
// var t1 = performance.now()
// addUpTo(1000000000)
// var t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// O(n) operation inside of an O(n) operation is O(n²)
function printAllPairs(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++){
            console.log(i, j)
        }
    }
}

printAllPairs(2)
