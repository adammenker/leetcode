let str = "Codewars@codewars123.com";

let array = [0,0,0,0];

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
    console.log(str.charCodeAt(i));
    if(str.charCodeAt(i) >= 64 && str.charCodeAt(i) <= 90){
        array[0]++;
        console.log(array);
    } else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 123){
        array[1]++;
        console.log(array);
    } else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
        array[2]++;
        console.log(array);
    } else if((s.charCodeAt(i) >= 32 && s.charCodeAt(i) <= 47) || (s.charCodeAt(i) >= 58 && s.charCodeAt(i) <= 64)){
        array[3]++;
        console.log(array);
    } 
}
