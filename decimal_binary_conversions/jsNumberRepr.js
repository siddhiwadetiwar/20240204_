/**the requirement is to get the javascript number representation
 * the first bit is most significant bit which is 1 for negative 
 * inetegers and 0 for positive next 11 bits are reserved for exponent 
 * bit or signed bit with two's complement and rest represents 
 * mantissa or magnitude.
 */

/**this function is used to convert number to double precision form 
 * @param {Number} number the number to be represented
 * @return {Array} an Array of length 52 bits 
*/

function getJsNumberRepresentation(number) {
    // Check if the input is a valid number
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  
    // Convert the number to IEEE 754 double-precision format
    let buffer = new ArrayBuffer(8);
    let floatArray = new Float64Array(buffer);
    let intArray = new Uint32Array(buffer);
  
    floatArray[0] = number;
  
    // Extract the binary representation
    let binaryRepresentation = '';
    for (let i = 0; i < intArray.length; i++) {
      binaryRepresentation += intArray[i].toString(2).padStart(32, '0');
    }
  
    // Extract the sign bit
    let signBit = (number < 0) ? '1' : '0';
  
    // Extract the exponent and mantissa bits
    let exponentBits = binaryRepresentation.substring(1, 12);
    let mantissaBits = binaryRepresentation.substring(12);
  
    // Create the final array representation
    let resultArray = [];
    resultArray.push(parseInt(signBit, 2)); // Sign bit
    resultArray.push(parseInt(exponentBits, 2)); // Exponent bits
    resultArray = resultArray.concat(mantissaBits.split('').map(Number)); // Mantissa bits
  
    return resultArray;
  }
  
  // Example usage:
  let number = -42.75;
  let representation = getJsNumberRepresentation(number);
  console.log(representation);  