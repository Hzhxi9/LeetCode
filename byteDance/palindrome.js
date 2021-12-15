/**回文检查器 */

function palindrome(str) {
  const result = str.replace(/\W|\_/g, '').toLowerCase();
  let start = 0,
    end = result.length - 1;

  while (start <= end) {
    if (result[start] !== result[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('not a palindrome'));
