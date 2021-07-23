var moveZeroes = function (nums) {
  // if (nums.length === 0) return [];
  // let target = 0;
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   if (nums[i] !== 0) nums[target++] = nums[i];
  // }
  // while (target < nums.length) nums[target++] = 0;
  // return nums;

  if (nums.length === 0) return [];
  let target = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[target]] = [nums[target], nums[i]];
      target++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
