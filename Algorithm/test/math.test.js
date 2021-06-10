const countDigitOne = require("../math/countDigitOne");

test.skip(" 整数中 1 出现的次数", () => {
  expect(countDigitOne(13)).toBe(6);
});

const strToInt = require("../math/strToInt");
test(" 字符串转换成整数", () => {
  expect(strToInt("1")).toBe(1);
});
