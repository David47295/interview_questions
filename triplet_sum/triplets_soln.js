/*
Triplets

Given an array of n distinct integers, d = [d[0], d[1], ... , d[n-1]], and an integer threshold, t, how many (a,b,c) triplets exists that satisfy both the following conditions
- d[a] < d[b] < d[c]
- d[a] + d[b] + d[c] <= t
*/

const test_cases = require('./test_cases.json').cases;

function triplets(t, d) {
    // Write code here 
    const d_sorted = d.filter(x => x <= t-1);
    d_sorted.sort((a,b) => {return a-b});
    let num_triplets = 0;
    if (d_sorted.length < 3) {
        return 0;
    }

    for (let i = 0; i < d_sorted.length - 2; i++) {
        let j = i + 1;
        let k = d_sorted.length - 1;
        while (j < k) {
            const sum = d_sorted[i] + d_sorted[j] + d_sorted[k];
            if (sum > t) {
                k--;
            } else {
                num_triplets += k - j;
                j++;
            }
        }
    }

    return num_triplets;
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(triplets(test_cases[i].t, test_cases[i].d));
    }
}

main();