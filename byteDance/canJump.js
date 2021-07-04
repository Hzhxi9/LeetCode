/** 跳跃游戏 */

function canJump(nums) {
  let faster = 0,
    len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    faster = Math.max(faster, i + nums[i]);
    if (faster <= i) return false;
  }

  return faster >= nums.length - 1;
}
