
/**二进制转字符串 */
function binaryAgent(str) {
  const arr = str.split(/\s/g),
    len = arr.length;

  let i = 0,
    result = '';

  while (i < len) {
    const item = arr[i], charCode = parseInt(item, 2)
    result += String.fromCharCode(charCode)
    i++;
  }

  return result;
}

const result =  binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
console.log(result)
// Aren't bonfires fun!?
