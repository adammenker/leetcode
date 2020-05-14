// there is an array of stock prices at the end of a trading day, you can only buy once and sell once, cant sell before you buy so determine best time ot buy and sell

// test cases: [7,1,5,3,6,4], [7,6,4,3,1]

var maxProfit = function(prices) {
    let low, profit;
    low = prices[0];
    profit = 0;
    for(let i = 0; i < prices.length; i++){
        
        if(prices[i] > low) {
            if((prices[i] - low) > profit){
                profit = prices[i] - low;
            }
        } else if (prices[i] <= low){
            low = prices[i];
            prices = prices.slice(i);
            i = 0;
        }
    }
    console.log(profit);
};



test_1 = [7,1,5,3,6,4];
test_2 = [7,6,4,3,1]

maxProfit(test_2);