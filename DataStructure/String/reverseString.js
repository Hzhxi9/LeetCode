/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;

    start++;
    end--;
  }
  return s;
};

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
