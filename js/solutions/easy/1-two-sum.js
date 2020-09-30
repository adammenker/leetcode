// Two sum

var twoSum = function(nums, target) { //O(n^2)
    let secondValue = 0;
    let secondIndex = 0;

    for(let i = 0; i < nums.length; i++){
        secondValue = target - nums[i];
        secondIndex = (nums.slice(i + 1)).indexOf(secondValue);
        if(secondIndex !== -1){
            return [i, secondIndex + i + 1];
        }
    }
};

let check = [3,2,4]
console.log(twoSum(check, 6));

// needs to be implemented with a hash map to improve time complexity