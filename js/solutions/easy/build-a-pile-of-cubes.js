function findNb(m) {
    let total = 0;
    let index = 1;
    while(total < m){
        m -= Math.pow(index, 3);
        if(total === m) return index;
        // console.log(`${m} -> ${index}`);
        index++;
    }
    return (-1);
}

let height = findNb(1071225);
console.log(height);