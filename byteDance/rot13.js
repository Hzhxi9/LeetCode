/**
 * 凯撒密码
 * 明文中的所有字母都被移动 13 位。 也就是， A ↔ N，B ↔ O 等等
 *
 * Input	ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 * Output	NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
 *
 */

function rot13(str) {
  const target = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rules = target.slice(13) + target.slice(0, 13);

  let result = '';
  for (let i = 0, len = str.length; i < len; i++) {
    const item = str[i];
    if (/[A-Z]/.test(item)) {
      result += rules[target.indexOf(item)];
    } else if (/[a-z]/.test(item)) {
      result += rules[target.indexOf(item.toUpperCase())].toLowerCase();
    } else {
      result += item;
    }
  }
  return result;
}

console.log(rot13('SERR PBQR PNZC')); // FREE CODE CAMP
