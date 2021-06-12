const findInversePairNum = require("../Array/findInversePairNum");

test("数组中的逆序对", () => {
  expect(findInversePairNum([1, 2, 3, 4, 5, 6, 7, 0])).toBe(7);
});

const printMatrix = require("../Array/printMatrix");
test("顺时针打印矩阵", () => {
  expect(
    printMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
