const findInversePairNum = require("../Array/findInversePairNum");

test("数组中的逆序对", () => {
  expect(findInversePairNum([1, 2, 3, 4, 5, 6, 7, 0])).toBe(7);
});
