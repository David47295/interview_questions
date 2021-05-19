/* 
Construction management Problem (See Video file in Radeon Relive folder on NAS (2020.10.16-16.25 @ 3:00) 
Write function that returns minimum cost to build all houses in the neighbourhood
*/

let M = []

const test_cases = require('./test_cases.json').cases;

function minCost(cost) {
    // Write code here
    M = cost[0];

    for (let i = 1; i < cost.length; i++) {
        for (let house = 0; house < 3; house++) {
            const possible_mats = cost[i].slice(0,house).concat(cost[i].slice(house+1,3)); 
            M[house] = Math.min(M[house] + possible_mats[0], M[house] + possible_mats[1]);
        }
    }
    return Math.min(...M);
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(minCost(test_cases[i]));
    }
}

main();