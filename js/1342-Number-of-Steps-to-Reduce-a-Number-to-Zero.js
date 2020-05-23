/* Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to 
divide it by 2, otherwise, you have to subtract 1 from it. */

var numberOfSteps  = function(num) {
    let count = 0;
    while(num !== 0){
        if (num === 0){
            return count;
        } else if(num % 2 === 0 && num > 0){
            num /= 2;
        } else if (num !== 0){
            num -= 1;
        } 
        count++;
    }
    return count;
};

let input = 123;

console.log(numberOfSteps(14));