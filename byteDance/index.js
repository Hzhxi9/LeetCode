// setTimeout(function () {
//   console.log(1);
// }, 0);
// new Promise(function (resolve) {
//   console.log(2);
//   for (var i = 0; i < 10000; i++) {
//     if (i == 9999) {
//       resolve();
//     }
//   }
//   console.log(3);
// }).then(function () {
//   console.log(4);
// });
// console.log(5);

// 2 3 5 4 1

function findMaxDuplicateChar(str) {
  let maxChar = "",
    maxValue = 1;

  const result = {};

  for (let i = 0, len = str.length; i < len; i++) {
    if (/\s/.test(str[i])) continue;
    if (result[str[i]] === undefined) result[str[i]] = 1;
    else result[str[i]]++;
  }

  for (const key in result) {
    maxValue = Math.max(result[key], maxValue);
    if (result[key] === maxValue) maxChar = key;
  }

  console.log(result);

  return {
    maxChar,
    maxValue,
  };
}
const str = "this is a fe test at toutiao on September";
// output: { maxChar:"t", maxValue:7 }

const { maxChar, maxValue } = findMaxDuplicateChar(str);
console.log(maxChar, maxValue);
