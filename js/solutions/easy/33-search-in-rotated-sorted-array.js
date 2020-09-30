/* Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).
*/

// EFFICIENT FOR VERY LARGE PROBLEM SETS, ALL OPERATION ARE O(log(n))
// FOR ANY TEST CASE ON LEETCODE, IT WOULD BE FASTER JUST TO USE 'indexOf(target)'

var search = function(nums, target) {
    let end = nums.length - 1;
    let start = 0;
    let mid; 
    let curMinInd = Number.POSITIVE_INFINITY;
    let prevMinInd = 0;
    let curMaxInd = Number.NEGATIVE_INFINITY;
    let prevMaxInd = 0;
    let pivot;

    while(prevMinInd !== curMinInd || prevMaxInd !== curMaxInd) {
        if(nums.length === 1) {
            pivot = 0;
            console.log(`found pivot at: ${pivot}`);
            break;
        }
        if(nums.length === 2){
            if(nums[0] < nums[1]) pivot = 0;
            else pivot = 1;
            console.log(`found pivot at: ${pivot}`);
            break;
        } 
        if(nums[start] < nums [end]){
            pivot = start;
            console.log(`found pivot at: ${pivot}`);
            break;
        }

        mid = Math.floor((end + start) / 2);
        prevMinInd = curMinInd;
        prevMaxInd = curMaxInd;
        console.log(`curMin: ${curMinInd}->${nums[curMinInd]}, mid: ${mid}->${nums[mid]}, curMax: ${curMaxInd}->${nums[curMaxInd]}\nstart:${start}->${nums[start]}, end:${end}->${nums[end]}`);
        // console.log(nums.slice(start, end + 1));
        
        if(nums[mid] > nums[end]){ // occurs in second half
            if(nums[mid + 1] < nums[mid]){
                pivot = mid + 1;
                console.log(`found pivot at: ${pivot}`);
                break;
            } 
            console.log("first case\n");
            start = mid + 1;
            if(nums[start] !== prevMaxInd){
                curMaxInd = start;
            }
        } else if (nums[mid] < nums[start]){ // occurs in first half
            console.log("second case\n");
            end = mid;
            if(nums[end] !== prevMinInd){
                curMinInd = end;
            }
        }
    }
    let partition;
    let check = 0;
    if(target >= nums[0] && target <= nums[pivot - 1]) {
        partition = nums.slice(0, pivot);
        check = 1;
    }else {
        partition = nums.slice(pivot);
        check = -1;
    }

    console.log(nums);
    console.log(partition);
    console.log(pivot);

    end = partition.length - 1;
    start = 0;
    while (start <= end){ 
        if(end > 0){
            mid = Math.floor((start + end) / 2);
        } else mid = 0;
        // console.log(mid);
        // console.log(partition[mid] + ' * ' + target);
        if (partition[mid] === target){
            // console.log(pivot);
            if(check === 1) return mid;
            else if(check === -1){
                // console.log(curMinInd + '*' + mid);
                return mid + pivot;
            } 
        }
        else if (partition[mid] < target) start = mid + 1; 
        else end = mid - 1; 
    } 
    return -1; 
};


let check = [266,267,268,269,271,278,282,292,293,298,6,9,15,19,21,26,33,35,37,38,39,46,49,54,65,71,74,77,79,82,83,88,92,93,94,97,104,108,114,115,117,122,123,127,128,129,134,137,141,142,144,147,150,154,160,163,166,169,172,173,177,180,183,184,188,198,203,208,210,214,218,220,223,224,233,236,241,243,253,256,257,262,263];
let check_2 = [6,7,1,2,3,4,5];
let check_3 = [1,3];
let check_4 = [4,5,6,7,8,1,2,3];
let check_5 = [1,3,5];
let check_6 = [283,287,288,294,295,299,0,1,2,6,12,14,17,20,24,26,33,35,38,42,46,48,50,53,56,57,58,64,66,67,69,72,75,76,78,80,81,82,83,84,90,92,93,95,99,104,108,109,112,117,122,123,124,126,130,144,145,147,152,160,164,166,168,172,173,174,176,180,181,182,183,187,188,192,195,196,197,199,200,203,207,208,212,214,217,219,222,234,239,240,241,242,245,246,248,252,254,255,256,258,262,264,266,267,269,272,273,274,280,281];

console.log(search(check_6, 144));