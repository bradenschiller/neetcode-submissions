class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    // Focus on the first part which is the removal of each of the elements that match the val

    removeElement(nums, val) {
        let k = 0;

        for (const num of nums) {
            if (num !== val) {
                nums[k] = num;
                k++;
            }
        }

        return k;
    }
}
