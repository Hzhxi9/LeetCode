/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sLen = s.length,
    tLen = t.length;

  if (sLen !== tLen) return false;

  let i = 0;

  const sMap = new Map(),
    tMap = new Map();

  while (i < sLen) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);

    if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i]) + 1);
    else tMap.set(t[i], 1);

    i++;
  }

  for (const [key, value] of sMap) {
    if (!tMap.has(key)) return false;
    if (tMap.get(key) === value) continue;
    else return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
