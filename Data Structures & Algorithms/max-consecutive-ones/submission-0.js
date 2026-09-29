class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // We need to find the highest amount of consecutive 1's
    // everytime we hit a 0 we need to log the last highest 1 count and refresh the current count

    findMaxConsecutiveOnes(nums) {
        let currentMaxCount = 0;
        let lastCurrentMaxCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentMaxCount = currentMaxCount + 1;

                if (currentMaxCount > lastCurrentMaxCount) {
                    lastCurrentMaxCount = currentMaxCount;
                }

            } else if (nums[i] === 0) {
                currentMaxCount = 0;
            }
        }

        return lastCurrentMaxCount;
    }
}
