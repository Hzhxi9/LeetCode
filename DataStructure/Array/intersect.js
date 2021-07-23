/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let idx1 = 0,
    idx2 = 0;

  const result = [];
  while (nums1.length > idx1 && nums2.length > idx2) {
    if (nums1[idx1++] === nums2[idx2++]) result.push(nums1[idx1]);
    else if (nums1[idx1] > nums2[idx2]) idx2++;
    else if (nums1[idx1] < nums2[idx2]) idx1++;
  }

  return result;
};

console.log(intersect([1, 2], [1, 1]));
