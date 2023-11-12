const maximumStrongPairXor = (nums) => {
  const len = nums.length;
  let max = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (Math.abs(nums[i] - nums[j]) > Math.min(nums[i], nums[j])) continue;

      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }

  return max;
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5])); // 7
console.log(maximumStrongPairXor([10, 100])); // 0
console.log(maximumStrongPairXor([5, 6, 25, 30])); // 7
