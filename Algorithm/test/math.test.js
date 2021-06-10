const countDigitOne = require("../math/countDigitOne");

test(" 整数中 1 出现的次数", () => {
  expect(countDigitOne(13)).toBe(6);
});
