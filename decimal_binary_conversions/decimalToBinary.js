/**requirement was to convert decimal numbers to binary and 
 * incase of negative the first number should be 1 representing
 * most significant bit 
 */

/**The function gets binary representation from decimal
 * 
 * @param {Number} number the decimal number to be converted
 * @param {Number} numberLength the length of binary should be 11 or 52 
 */

function decimalToBinary(number, numberLength) {
    // Check if the number is negative
    const isNegative = number < 0;

    if(numberLength != 11 || numberLength != 52){
        throw new Error("Input should not be anything else than 11 and 52");
    }
    // Convert the absolute value of the number to binary
    let binaryRepresentation = Math.abs(number).toString(2);
  
    // Pad the binary representation with zeros to match the desired length
    while (binaryRepresentation.length < numberLength - 1) {
      binaryRepresentation = '0' + binaryRepresentation;
    }
  
    // Add the sign bit if the number is negative
    if (isNegative) {
      binaryRepresentation = '1' + binaryRepresentation;
    } else {
      // Add a leading zero for positive numbers
      binaryRepresentation = '0' + binaryRepresentation;
    }
  
    return binaryRepresentation;
  }
  
  // Examples
  console.log(decimalToBinary(-1, 11));   // Output: 0001
  console.log(decimalToBinary(-1, 5));  // Output: 10001