/**
 *  题目
 *  求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 *
 *  示例
 *  3101592
 *
 *  1. "1"在百位上出现的次数   base 100
 *  cur 5       n / base / 10
 *  a   3101    n % base
 *  b   92      (n / base) % 10
 *  cur 定为 1 cur > 1
 *  cur前面出现的范围为 0000 ～ 3101  （a + 1）
 *  cur后面出现的范围为 00 ～ 99        base
 *  则1在百位上出现的个数为 (a + 1) * base
 *
 *  2. "1"在千位上出现的次数   base 1000
 *  cur 1    cur === 1
 *  -  000 ～ 309  000 ～ 999   a * base
 *  -  310         000 ～ 592   1 * （b + 1）
 *  则1在百位上出现的个数为 a * base + b + 1
 *
 *  3. "1"在万位出现的个数     base 10000
 *  cur 0   cur < 1
 *  - 00 ～ 30 0000 ～ 9999  a * base
 *  则1在万位上出现的个数为 a * base
 */

/**
 * 解法一
 * 包含1的个数
 * @param {number} n
 * @returns {number}
 */
const countDigitOne = function (n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += numberOfOne(i);
  }
  return count;
};

/**
 * 查找是否包含1
 * @param {number} n
 * @returns {number}
 */
function numberOfOne(n) {
  let count = 0;
  let pos = n.toString().indexOf(1);
  while (~pos) {
    pos = n.toString().indexOf(1, pos + 1);
    count++;
  }
  return count;
}

console.log(countDigitOne(1000));

// const countDigitOne = function (n) {
//   let i = 1,
//     count = 0,
//     current,
//     before,
//     after;

//   while (n / i !== 0) {
//     current = (n / i) % 10;
//     before = n / (i * 10);
//     after = n - (n / i) * i;

//     if (current === 0) {
//       count += before * i;
//     } else if (current === 1) {
//       count = count + (before * i + after + 1);
//     } else {
//       count += (before + 1) * i;
//     }

//     i = i * 10;

//     // b = n % base;
//     // a = n / base;
//     // cur = a % 10;
//     // a /= 10;
//     // if (cur > 1) res += (a + 1) * base;
//     // else if (cur === 1) res += a * base + b + 1;
//     // else res += a * base;
//     // base *= 10;
//   }

//   return count;
// };

// console.log(countDigitOne(13));
