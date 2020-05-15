/* Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element.
You may assume no duplicate exists in the array.
*/

// EFFICIENT

var findMin = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }

    let left = nums.slice(0, Math.floor(nums.length / 2));
    let right = nums.slice(Math.floor(nums.length / 2));
    console.log(left);
    console.log(right);

    if(left[0] < right[right.length - 1]) return left[0];
    if(right[0] < left[left.length - 1]) return right[0];

    if(left[left.length - 1] > right[0]) return right[0];
    if(right[right.length - 1] > left[0]) return left[0];

    if(left[0] > left[left.length - 1]){
        if(left[0] == 38){
            return
        }
        return findMin(left);
    } else {
        if(right[0] == 38){
            return
        }
        return findMin(right);
    }
};

let check = [266,267,268,269,271,278,282,292,293,298,6,9,15,19,21,26,33,35,37,38,39,46,49,54,65,71,74,77,79,82,83,88,92,93,94,97,104,108,114,115,117,122,123,127,128,129,134,137,141,142,144,147,150,154,160,163,166,169,172,173,177,180,183,184,188,198,203,208,210,214,218,220,223,224,233,236,241,243,253,256,257,262,263];

let check_2 = [3,4,5,1,2];
let check_3 = [5,6,1,2,3,4];

console.log(findMin(check));