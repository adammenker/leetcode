
const hash = function(string, max){
    let hash = 0;
    for(let i = 0; i < string.length; i++){
        hash += string.charCodeAt(i) * 97;
    }
    return hash % max;
}


class hashMap{
    constructor(max, storage){
        this.max = max;
        this.storage = storage
    }

    print(){
        console.log(this.storage);
    }

    add(key, value){
        let index = hash(key, this.max);

        if(this.storage[index] === undefined){
            this.storage[index] = [
                [key, value]
            ];
        } else{
            var inserted = false;
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
        }
        if(inserted === false){
            this.storage[index].push([key, value]);
        }
    }

    remove(key){
        let index = hash(key, this.max);
        for(let i = 0; i < this.storage[index].length; i++){
            if(this.storage[index][i] && this.storage[index][i][0] === key){
                delete this.storage[index][i];
            }
        }
    }

    lookup(key){
        let index = hash(key, this.max);
        if(this.storage[index]){
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i] && this.storage[index][i][0] === key){
                    return this.storage[index][i];
                }

            }
        }
    }
};

let myHT = new hashMap(100, []);
myHT.add("adam", "745-2931");
myHT.add("jon", "3-2932");
myHT.add("jon", "3-1");
myHT.add("fred", [401, 5]);
myHT.remove("jon");
myHT.remove("jon");
myHT.print();
console.log(myHT.lookup("adam"));

// console.log(hash("fred", 2000));
// console.log(myHT.storage[449]);
// console.log(hash("adam", 2000));