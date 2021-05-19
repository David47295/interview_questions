/***
 * The function min_element has a bug in it. It is suppossed to take two arrays and 
 * return the smallest common element between the two arrays.
 * If there is no such element, then it returns -1. 
 * Find and fix the bug in at most 2 line modification.
 */

 const test_cases = require('./test_cases.json').cases;

function cmp (a,b) {return a - b;}

function min_element(A,B) {
    const n = A.length;
    const m = B.length;
    if (n < m) { const temp_a = A; A = B; B = temp_a; }
    A.sort(cmp);
    B.sort(cmp);
    let i = 0;
    for (let k = 0; k < Math.max(n, m); k++) {
        if (i < m - 1 && B[i] < A[k]) {
            i++;
        }
        if (A[k] == B[i]) {
            return A[k];
        }
    }
    return -1;
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(min_element(test_cases[i][0], test_cases[i][1]));
    }
}

main();
