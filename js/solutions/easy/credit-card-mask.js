function maskify(cc) {
  if(cc.length > 4){
    visibleStr = cc.slice(cc.length - 4);
    newStr = "";
    for(i = 0; i < cc.length - 4; i++){
      newStr += "#";
    }
    return(newStr += visibleStr);
  }
  return cc;
}

let test1 = '4556364607935616';
let test2 = '1';
let test3 = '11111';

let string = maskify(test3);
console.log(string);