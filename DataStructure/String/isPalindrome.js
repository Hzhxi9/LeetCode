/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = new RegExp("[^A-Za-z0-9]", "g");

  if (s.length === 1) return true;

  s = s.replace(reg, "").replace(/\s/g, "").toLowerCase();

  let start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome('Marge, let's \"[went].\" I await {news} telegram.'));
