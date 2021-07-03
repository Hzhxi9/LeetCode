/**删除有序数组中的重复项【快慢指针】 */

function removeDuplicates(nums) {
  const len = nums.length;

  if (len <= 1) return len;

  let low = 0,
    hight = 0;

  while (hight < len) {
    while (nums[low] === nums[hight] && hight < len) hight++;
    if (nums[low] !== nums[hight] && hight < len) {
      low++;
      nums[low] = nums[hight];
    }
    hight++;
  }
  return low + 1;
}
