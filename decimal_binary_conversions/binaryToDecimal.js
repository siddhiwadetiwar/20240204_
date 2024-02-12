/**requirement was to convert decimal numbers to binary and 
 * incase first number is represented by 1 then consider it
 * to be negative number denoting most significant bit
 */

/**the function binaryToDecimal converts decimal representation
 * to binary number
 * @param {Number} number the binary number to be converted
 * @param {Number} numberLength the length of input
 * @returns 
 */
function binaryToDecimal(binary, numberLength) {
  // Extract the sign bit
  const signBit = binary.charAt(0);

  // Extract the absolute binary representation
  const absoluteBinary = binary.substring(1);

  // Pad the binary representation with zeros to match the desired length
  let paddedBinary = absoluteBinary;
  while (paddedBinary.length < numberLength - 1) {
    paddedBinary = '0' + paddedBinary;
  }

  // Combine the sign bit and padded binary representation
  const fullBinary = signBit + paddedBinary;

  // Convert the binary representation to decimal
  const decimalValue = parseInt(fullBinary, 2);

  // Apply the sign based on the extracted sign bit
  return signBit === '1' ? -decimalValue : decimalValue;
}

// Examples
console.log(binaryToDecimal('0001', 4));   // Output: 1
console.log(binaryToDecimal('00011', 5));  // Output: -1