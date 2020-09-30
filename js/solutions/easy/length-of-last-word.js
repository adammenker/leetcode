var lengthOfLastWord = function(s) {
    // go to end of string
    // for loop backward until a ' ' charcter is hit
    // unitl string[0] is hit
    // if "" is string
    
    if(s.length === 0){
        return 0;
    }
    
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--){
        
        if(s[i] != ' '){
            count++;
        }
        if(count > 0 && s[i] === ' '){
            return count;
        }
        if(i === 0){
            return count;
        }
    }
};