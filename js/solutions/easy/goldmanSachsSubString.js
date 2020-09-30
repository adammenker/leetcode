function countPalindromesInString(s) {
    let palidromeStrings = [];

    for (let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length - i; j++) {

        let subPal = s.slice(j, j + 1 + i);
        let splitEachLetter = subPal.split('');
        let flippedString = splitEachLetter.reverse().join('');

        if(subPal === flippedString) {
            if(!palidromeStrings.includes(subPal)){
                palidromeStrings.push(subPal);
            }
        }

      }
    }
    return palidromeStrings.length;
}



let a = countPalindromesInString("racecar");
console.log(a);