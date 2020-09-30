// for loop over all nums
// take first num check 2 nums behind it 

// if i > i+1,2,3 -> too chaotic
// if i > i+1 -> 1 bribe
// if i > i+1,2 -> 2 bribes


// 2 1 5 3 4 6 8 7

// 
// for

let test1 = [2, 1, 5, 3, 4];
let test2 = [2, 5, 1, 3, 4];
let test3 = [1, 2, 3, 5, 4];
let test4 = [1, 2, 5, 3, 4, 7, 8, 6];
let test5 = [1, 2, 5, 3, 7, 8, 6, 4]

// function minimumBribes(q) {
//     let bribes = 0;
//     let temp = 0;

//     for(let i = 0; i < q.length; i++){
//         for(let j = 1 + i; j < q.length; j++){
//             // console.log(i + " & " + j + "   :   " + q[i] + " & " + q[j]);
//             if(q[i] > q[j]){
//                 temp++;
//                 // console.log(temp);
//             }
//         }
//         if(temp > 2){
//             console.log("Too chaotic");
//             return;
//         }
//         bribes += temp;
//         temp = 0;
//     }

//     console.log(bribes);
// }


function minimumBribes(q) {
    let bribes = 0;
    let temp = 0;

    for(let i = 0; i < q.length; i++){
        console.log((i + 1) + ":  " + q[i]);

        if(q[i] > i + 3) {
            console.log("Too chaotic");
            return;
        }

        if(q[i] > (i + 1)){
            bribes += (q[i] - (i + 1));
            console.log(bribes);
        }
    }

    console.log(bribes);
}

minimumBribes(test5);