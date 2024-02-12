/**the requirement was to perform addition of two numbers
 * the numbers should be considered as arrays and addition
 * should be performed considering the carry and length of array
 */

/**this function takes two arrays as parameter for addition
 * @param {Array} array1 array for addition of any length
 * @param {Array} array2 array for addition of any length
 * @returns {Array} array returns addition of two error
 * @throws {Error} when array contains negative integer, number greater than 9
 */

function additionOperation(array1,array2){

    //reversing the array
    let num1 = array1.slice().reverse();
    let num2 = array2.slice().reverse();

    for(let j = 0; j < num1.length; j++){
        if(num1[j] < 0 || num2[j] < 0){
            throw new Error("Negative numbers as input are invalid")
        }
        if(num1[j] > 9 || num2[j] > 9){
            throw new Error("Numbers greater than 9 as input are invalid")
        }
    }

    //ensuring both arrays are of same length by prepending zeros
    while (num1.length < num2.length) {
        num1.push(0);
    }
    while (num2.length < num1.length) {
        num2.push(0);
    }

    let result = [];
    let carry = 0;

    //iterate for loop to add digits with carry when needed
    for(let i = 0; i < num1.length; i++){
        let sum = num1[i] + num2[i] + carry;
        //finding the value of carry using floor division
        carry = Math.floor(sum/10);
        //pushing the remainder into the result array
        result.unshift(sum%10);
    }

    //if there's any remaining carry after loop append it with result
    if(carry > 0){
        result.unshift(carry);
    }

    return result;
}

function testAdditionOperation() {
    function test(additionFunction, array1, array2) {
        const result = additionFunction(array1, array2);
        console.log("Array 1:", array1);
        console.log("Array 2:", array2);
        console.log("Result:", result);
        console.log("Test Passed");
    }

    //test cases
    //test(additionOperation, [-1, 2, 3], [4, -5, 6]);
    //test(additionOperation, [0], [0]);
    //test(additionOperation, [10, 2, 3], [7, 8, 9]);
}

// run the testing function
testAdditionOperation();

const array1 = [9];
const array2 = [9,9];
const result = additionOperation(array1,array2);
console.log("Result:", result);

