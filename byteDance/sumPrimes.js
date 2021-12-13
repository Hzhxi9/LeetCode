function isPrimes(num) {
  if (num <= 3) {
    return num > 1;
  } else {
      /**
       * 在一般领域，对正整数n，如果用2到 [公式] 之间的所有整数去除，均无法整除，则n为质数。
       */
    const sq = Math.sqrt(num);
    for (let i = 2; i <= sq; i++) {
      if (!(num % i)) return false;
    }
    return true;
  }
}

function sumPrimes(num) {
  let result = 0;
  while (num > 0) {
    if (isPrimes(num)) result += num;
    num--
  }
  return result;
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
