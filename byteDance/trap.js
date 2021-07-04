/** 接雨水 */

function trap(height) {
  let l_max = [],
    r_max = [],
    maxCapacity = 0;

  const len = height.length;

  for (let i = 0; i < len; i++) {
    l_max[i] = height[i];
    r_max[i] = height[i];
  }

  for (let i = 1; i < len; i++) l_max[i] = Math.max(l_max[i - 1], height[i]);

  for (let j = len - 2; j >= 0; j--)
    r_max[j] = Math.max(r_max[j + 1], height[j]);

  for (let i = 0; i < len; i++)
    maxCapacity += Math.max(l_max[i], r_max[i] - height[i]);

  return maxCapacity;
}
