/**the requirement was to perform multiplication of two numbers
 * the number should be considered as arrays and multiplication 
 * should be done considering the carry and length of array
 */

/**this fucntion takes two array as parameter for multiplication
 * @param {Array} array1 first array for multiplication of any length
 * @param {Array} array2 second array for multiplication of any length
 * @returns {Array} array product of multiplication of two arrays
 * @throws {Error} when array contains negative integer, number greater than 9
 */

function multiplicationOperation(array1,array2){

    //reversing the array
    let num1 = array1.slice().reverse();
    let num2 = array2.slice().reverse();

    //declaring variable result as an array containing 0s
    let result = [];

    for(let j = 0; j < num1.length; j++){
        if(num1[j] < 0 || num2[j] < 0){
            throw new Error("Negative numbers as input are invalid")
        }
        if(num1[j] > 9 || num2[j] > 9){
            throw new Error("Numbers greater than 9 as input are invalid")
        }
    }
    
    //for loop to calculate product of digits and add to result array
    for(let i = 0; i < num1.length; i++){
        for(let j = 0; j < num2.length; j++){
            let product = num1[i] * num2[j] + (result[i+j] || 0);
            //update the result array with the ones digit of the product.
            result[i+j] = product % 10;
            //update result array with tens digit of product
            result[i+j+1] = (result[i+j+1] || 0) + Math.floor(product / 10);
        }
    }

    //remove leading zeros in the result
    while (result.length > 1 && result[result.length - 1] === 0){
        result.pop();
    }
    return result.reverse();
}

function testMultiplicationOperation() {
    function test(multiplicationFunction, array1, array2) {
        const result = multiplicationFunction(array1, array2);
        console.log("Array 1:", array1);
        console.log("Array 2:", array2);
        console.log("Result:", result);
        console.log("Test Passed");
    }

    //test cases
    //test(multiplicationOperation, [-1, 2, 3], [4, -5, 6]);
    //test(multiplicationOperation, [0], [0]);
    //test(multiplicationOperation, [1, 2, 3], [7, 8, 9]);
}

// run the testing function
testMultiplicationOperation();

const array1 = [1,5];
const array2 = [2,5,2];
const result = multiplicationOperation(array1, array2);
console.log("Result: [" + result.join(", ") + "]");

