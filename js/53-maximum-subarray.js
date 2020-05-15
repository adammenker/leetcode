// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// EFFICIENT 

var maxSubArray = function(nums) {
    let total, current, high;
    total = 0;
    current = 0;
    high = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > high){
            high = nums[i];
        }
        current += nums[i];
        if(current > total){
            total = current;
        } else if(current < 0) {
            current = 0;
        }
    }
    if(total === 0){
        return high;
    }
    return total;
};

let check = [1];

console.log(maxSubArray(check));