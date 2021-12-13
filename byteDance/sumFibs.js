/**求斐波那契数列中的奇数之和 */

function sumFibs(num) {
  let result = 0,
    prev = 0,
    cur = 1;

  while (cur <= num) {
    if (cur % 2) result += cur;
    cur += prev;
    prev = cur - prev;
  }
  return result;
}

console.log(sumFibs(4)); // 5
console.log(sumFibs(10)); // 10
