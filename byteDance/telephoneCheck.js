/**
 * 电话号码检查器
 * 
 * 555-555-5555
 * (555)555-5555
 *（555）555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 */

function telephoneCheck(str) {
  const reg = /^1?\s?(\(\d{3}\)|\d{3})(\s|\-)?\d{3}(\s|\-)?\d{4}$/
  return reg.test(str);
}

console.log(telephoneCheck('555)-555-5555"'));
console.log(telephoneCheck('(6054756961)'));
