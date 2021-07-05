/** 寻找两个正序数组的中位数*/

function findMedianSortedArrays(nums1, nums2) {
  const m = nums1.length,
    n = nums2.length;
  let i = 0,
    j = 0,
    newArr = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) newArr.push(nums1[i++]);
    else newArr.push(nums2[j++]);
  }

  newArr = newArr.concat(i < m ? nums1.slice(i) : nums2.slice(j));

  const len = newArr.length;

  if (len % 2 === 0) return (newArr[len / 2] + newArr[len / 2 - 1]) / 2;
  else return newArr[~~(len / 2)];
}
