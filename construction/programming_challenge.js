/* 
Construction management (See Video file in Radeon Relive folder on NAS (2020.10.16-16.25) 
*/

const test_cases = require('./test_cases.json').cases;

function minCost(cost) {
    // Write code here
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(minCost(test_cases[i]));
    }
}

main();