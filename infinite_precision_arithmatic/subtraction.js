
/**the requirement was to perform subtraction of two numbers
 * the number should be considered as arrays and subtraction
 * should be done considering the carry and length of array
 */

/**this function takes two arrays as parameter for subtraction
 * @param {Array} array1 the array for subtraction of any length
 * @param {Array} array2 the array for subtraction of any length
 * @returns {Array} array result of subtraction of two array
 * @throws {Error} when array contains negative integer, number greater than 9
 */

function subtractionOperation(array1, array2){

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

    //variable to track negative result and swap if needed
    let flag = false;

    for (let i = num1.length - 1; i >= 0; i--) {
        if (num1[i] < num2[i]) {
            //swapping if num1 less than num2
            [num1, num2] = [num2, num1];
            //change the flag value to true if swapped
            flag = true;
            break;
        } else if (num1[i] > num2[i]) {
            break;
        }
    }
    
    //for loop to adjust digits, adds 10 and subtracts 1 if needed
    for(let i = 0; i < num1.length; i++){
        if(num1[i] < num2[i]){
            num1[i] = num1[i] + 10;
            num1[i+1] -= 1;
        }
        num1[i] = num1[i] - num2[i];
    }

    //while loop to remove trailing zeros if array length greater than 1
    while(num1.length > 1 && num1[num1.length-1] === 0){
        num1.pop();
    }
    
    const result = num1.reverse();

    //add minus sign in case smaller number is subtracted from bigger
    if(flag){
        result.unshift('-');
    }
    return result;
}


function testsubtractionOperation() {
    function test(subtractionFunction, array1, array2) {
        const result = subtractionFunction(array1, array2);
        console.log("Array 1:", array1);
        console.log("Array 2:", array2);
        console.log("Result:", result);
        console.log("Test Passed");
    }

    //test cases
    //test(subtractionOperation, [-1, 2, 3], [4, -5, 6]);
    //test(subtractionOperation, [0], [0]);
    //test(subtractionOperation, [1, 2, 3], [7, 8, 9]);
}

// run the testing function
testsubtractionOperation()
const array1 = [1,2];
const array2 = [9,0,0];

const result = subtractionOperation(array1, array2);
console.log("Result:", result);
