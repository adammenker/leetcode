/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*/

//NOT EFFICIENT

var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = 0; j < height.length; j++){
            let smallestHeight = null;
            let currentArea = null;
            if(height[i] < height[j]) smallestHeight = height[i];
            else smallestHeight = height[j];

            currentArea = Math.abs(i - j) * smallestHeight;
            if(currentArea > maxArea){
                maxArea = currentArea;
            } 
        }
    }
    return maxArea;
};

let check = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(check));