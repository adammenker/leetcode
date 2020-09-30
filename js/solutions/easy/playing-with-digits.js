function digPow(n, p){
    let digits = [],
    stringNumber = n.toString();

    for (let i = 0; i < stringNumber.length; i ++) {
        digits.push(stringNumber.charAt(i));
    }

    let sumOfDigits = 0;
    for(let i = 0; i < digits.length; i++){
        sumOfDigits += Math.pow(Number(digits[i]), p);
        p++;
    }
    let k = sumOfDigits / n;
    if((sumOfDigits % n) === 0) return k;
    else return -1;
}


let num = digPow(46288, 3);
console.log(num);