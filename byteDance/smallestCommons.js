/**
 * 找出数字范围内的最小公倍数
 *
 * 找到给定参数的最小公倍数，
 * 可以被这两个参数整除，
 * 也可以被指定范围内的所以整数整除。
 *
 * @param {*} arr
 * @returns
 */

function smallestCommons(arr) {
  const min = Math.min(...arr),
    max = Math.max(...arr);
  for (let i = (result = min); i <= max; i++) {
    result = scm(i, result);
  }
  return result;
}

function gcd(start, end) {
  if (!end) return start;
  return gcd(end, start % end);
}

function scm(start, end) {
  return (start * end) / gcd(start, end);
}



console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
