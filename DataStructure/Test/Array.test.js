const threeSum = require("../Array/threeSum");
test.skip("三数之和", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

const findInversePairNum = require("../Array/findInversePairNum");
test.skip("数组中的逆序对", () => {
  expect(findInversePairNum([1, 2, 3, 4, 5, 6, 7, 0])).toBe(7);
});

const printMatrix = require("../Array/printMatrix");
test.skip("顺时针打印矩阵", () => {
  expect(
    printMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

const binarySearch = require("../Array/binarySearch");
test("在排序数组中查找数字", () => {
  expect(binarySearch([1, 2, 3, 3, 3, 3, 4, 5], 3)).toBe(4);
}); 

// const fourSum = require("../Array/fourSum");
// test("四数之和", () => {
//   expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
//     [-1, 0, 0, 1],
//     [-2, -1, 1, 2],
//     [-2, 0, 0, 2],
//   ]);
// });
