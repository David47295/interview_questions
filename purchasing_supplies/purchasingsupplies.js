/***
 * Purchasing Supplies 
A manufacturer purchases fragile components that must be shipped using expensive 
containers. The manufacturer agrees to provide customers with a free container of components 
for returning a certain number of containers. Determine the maximum number of containers a 
customer can receive given a budget, the cost per container, and the number of empty 
containers that must be returned for a free container. Assume each container is immediately 
emptied and returned for credit. 

Example
n = 4
cost = 1
m = 2 
Start with a budget n = 4 units of currency to buy containers at cost = 1 unit each. The number 
of empty containers to return for a free full container is m = 2. First, buy 4 containers with the 
entire budget. Turn in those 4 containers for 2 more containers. Turn in those 2 containers for 
one more. At this point, there are not enough funds or containers to receive another. In total, 4 
+ 2 + 1 = 7 containers were obtained. 

Function Description 
Complete the function maximumContainers in the editor below. 

maximumContainers has the following parameter(s): 
string scenarios[n]: each string contains three space-separated integers, starting budget, cost, 
and the number of containers to return for a full container. 

Print 
int: For each test case the function must print an integer, the maximum number of containers 
the manufacturer can obtain, each on a new line. No return value is expected. 

Constraints 
- 1 <= n <= 10^3
- 2 <= starting budgets <= 10^5 
- 1 <= cost of a container in money <= starting budget 
- 2 <= number of empty containers to return <= starting budget 
 */

const test_cases = require('./test_cases.json').cases;

function maximumContainers(scenarios) {
    // Write Code here
    
}

function main() {
    for (let i = 0; i < test_cases.length; i++) {
        console.log('Test case', i, ':', test_cases[i]);
        console.log(maximumContainers(test_cases[i]));
    }
}

main();