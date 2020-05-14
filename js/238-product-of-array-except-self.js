// given array of ints and array has more that 1 element, find product of all elements except current element
// input [1,2,3,4], output [24,12,8,6]

var productExceptSelf = function(nums) {
    let total = 1;
    let zeroIndexes = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            total *= nums[i];
        } else if(nums[i] === 0){
            zeroIndexes.push(i);
        }
    }
    let outputArray = [];
    for(let i = 0; i < nums.length; i++){
        let outputElement;

        if(nums[i] !== 0){
            outputElement = total / nums[i];
        } else if(nums[i] === 0){
            outputElement = total;
        }

        if(zeroIndexes.length > 0 && i !== zeroIndexes[0]){

            outputElement = 0;
        }
        if(zeroIndexes.length > 1){
            outputElement = 0;
        }
        outputArray.push(outputElement);
    }
    return outputArray;
};

let check = [1,2,3,4];

console.log(productExceptSelf(check));