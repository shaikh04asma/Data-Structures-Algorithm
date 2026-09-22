"use strict";
function twoSum(nums, target) {
    let history = {};
    for (let i = 0; i < nums.length; i++) {
        let partner = target - nums[i];
        if (partner in history) {
            return [history[partner], i];
        }
        else {
            history[nums[i]] = i;
        }
    }
    return [];
}
let ans = twoSum([2, 7, 11, 15], 9);
console.log(ans);
