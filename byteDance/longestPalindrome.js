/**最长回文子串【双指针】 */

function longestPalindrome(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;

  let maxRos = 1,
    maxStr = "";

  for (let i = 0, len = str.length; i < len; i++) {
    const str1 = palindrome(str, i, i);
    const str2 = palindrome(str, i, i + 1);

    if (str1.length > maxRos) {
      maxStr = str1;
      maxRos = str1.length;
    }

    if (str2.length > maxRos) {
      maxStr = str2;
      maxRos = str2.length;
    }
  }

  return maxStr;
}

function palindrome(str, l, r) {
  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
  }
  return str.slice(l + 1, r);
}

console.log(longestPalindrome("cbbd"));
