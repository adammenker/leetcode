function friend(friends){
    let final = [];
    for(name of friends){
        if(name.length === 4) final.push(name);
    }
    return final;
}

let answer = friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
console.log(answer);