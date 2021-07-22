/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    // digits[i]++;
    digits[i]++;
    console.log(digits[i] % 10);
    digits[i] %= 10;
    // if (digits[i] !== 0) return digits;
  }
  digits = [...Array(len + 1)].map(_ => 0);
  digits[0] = 1;
  return digits;
};

console.log(plusOne([1, 9, 9]));
