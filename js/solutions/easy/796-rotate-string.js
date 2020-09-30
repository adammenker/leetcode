var rotateString = function(A, B) {
    //     if(A.length != B.length) return false;
    //     if(A === B) return true;
        
    //     let dynamicString = A;
    //     let firstChar = '';
    //     for(let i = 0; i < A.length; i++){
    //         firstChar = dynamicString[0];
    //         dynamicString = dynamicString.slice(1, dynamicString.length);
    //         dynamicString = dynamicString + firstChar;
    //         if(dynamicString === B) {
    //             return true;
    //         }
    //     }
    //     return false
        
        if(A.length != B.length) return false;
        if(A === B) return true;
        
        let longString = B + B;
        if(longString.includes(A)) return true;
        else return false;
    };