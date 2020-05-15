// Two sum

var twoSum = function(nums, target) { //O(n^2)
    var i, x;
    for(i = 0; i < nums.length; i++){
        for(x = 0; x < nums.length; x++){
            if(nums[i] + nums[x + i] === target){
                return [i, x + i];
            }
        }
    }
};

// needs to be implemented with a hash map to improve time complexity