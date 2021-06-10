const countDigitOne = require("../math/countDigitOne");

test.skip(" 整数中 1 出现的次数", () => {
  expect(countDigitOne(13)).toBe(6);
});

const strToInt = require("../math/strToInt");
test.each([
  [" +1.123sfsdfsd", 1],
  [" -42", -42],
  ["1", 1],
  ["91283472332", 2147483647],
])(" 字符串转换成整数", (str, num) => {
  expect(strToInt(str)).toBe(num);
});
