/*
Triplets

Given an array of n distinct integers, d = [d[0], d[1], ... , d[n-1]], and an integer threshold, t, how many (a,b,c) triplets exists that satisfy both the following conditions
- d[a] < d[b] < d[c]
- d[a] + d[b] + d[c] <= t
*/

const test_cases = require('./test_cases.json').cases;

function triplets(t, d) {
    // Write code here
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(triplets(test_cases[i].t, test_cases[i].d));
    }
}

main();