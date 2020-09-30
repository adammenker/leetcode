// check to see if there are duplicates in array of integers

// i think my time complexity is O(2n log(n)), sort takes n log(n) and then i do another O(n) loop to check

// EFFICIENT BUT IMPROVES WITH HASH TABLE

var containsDuplicate = function(nums) {
    if(nums){
        if(nums.length === 1){
            return false;
        }
        nums = nums.sort();
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] === nums[i + 1]) return true;
        }
        return false;
    }
};

check = [1,3,4,2,5,7,8,33,44,55,9,1];

console.log(containsDuplicate(check));