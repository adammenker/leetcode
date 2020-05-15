// there is an array of stock prices at the end of a trading day, you can only buy once and sell once, cant sell before you buy so determine best time ot buy and sell

// test cases: [7,1,5,3,6,4], [7,6,4,3,1]

// EFFICIENT

var maxProfit = function(prices) {
    let profit = 0;
    let current;
    let buy = Number.POSITIVE_INFINITY;

    for(let i = 0; i < prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i];
        } else {
            current = prices[i] - buy;
            if(current > profit){
                profit = current
            }
        }
    }
    return profit;
};



test_1 = [7,1,5,3,6,4];
test_2 = [7,6,4,3,1]
check = [10,20,30,40,50,5,1,30]

console.log(maxProfit(check));