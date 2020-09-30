function threeDivSubsequences(number) {
    let total = 0;
    
    if(Number(number) == NaN) return 0;
    
    for(let i = 0; i < number.length; i++){
        for(let j = i; j < number.length; j++){
            
            if(number.slice(i, j + 1).length > 1 && Number(number.slice(i, j + 1)) < 10){
                total--;
            }
            
            let current = Number(number.slice(i, j + 1));
            console.log(current);
            if(current % 3 === 0){
                    console.log("hit");
                    total++;
                }
        }
    }
    return total;
}