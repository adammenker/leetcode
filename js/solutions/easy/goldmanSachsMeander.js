let unsorted = [-1,1,2,3,-5,10,-10,8,-8,1];


unsorted.sort((a, b) => a - b);

let nArr = new Array(unsorted.length);
let j = unsorted.length - 1;
let count = 1;

for(let i = 0; i <= unsorted.length / 2; i++){
    if(i === 0){
        count = 1;
    } else {
        count += 2;
    }

    nArr[count - 1] = unsorted[j];
    nArr[count] = unsorted[i];

    j--;
}

let err = nArr.length - unsorted.length;

for(let i = 0; i < err; i++){
    if(nArr.length > unsorted.length){
        nArr.pop();
    }
}



console.log(nArr);