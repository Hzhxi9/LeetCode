function longestConsecutive(nums) {
  if (!nums.length) return 0;

  const set = new Set(nums),
    len = nums.length;

  let globalLongest = 1;

  for (let i = 0; i < len; i++) {
    const num = nums[i];

    if (!set.has(num - 1)) {
      let longest = 1,
        currentNums = nums[i];

      while (set.has(currentNums + 1)) {
        currentNums += 1;
        longest++;
      }
      globalLongest = Math.max(globalLongest, longest);
    }
  }
  return globalLongest
}
