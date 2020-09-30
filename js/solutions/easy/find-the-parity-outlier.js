function findOutlier(integers){
    let evensIndexes = [];
    let oddsIndexes = [];
    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0) evensIndexes.push(integers[i])
        else oddsIndexes.push(integers[i]);

        if(i >= 2){
            if(oddsIndexes.length === 1) return oddsIndexes[0];
            else if(evensIndexes.length === 1) return evensIndexes[0];
        }
    }
}

let ind = findOutlier([1, 2, 3]);
console.log(ind);