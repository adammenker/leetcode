class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
// args for constructors are dependent on what implementation you are going for (i.e. you dont need tail if you dont want it)
class LinkedList {
    constructor(){
        this.head = null;
        this.count = 0;
    }

    insertAtHead(data){
        this.head = new Node(data, this.head);
        this.count++;
    }

    printLinkedList(){
        let temp = this.head;
        
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    removeFromIndex(index){
        if(index >= this.count){
            return;
        }

        let current = this.head;
        let previous = current;
        
        for(let i = 0; i < index; i++){
            previous = current;
            current = current.next;
        }
        
        previous.next = current.next;
       
    }

    freeList(){
        let current = this.head;
        let previous = current;
        while(current){
            previous = current;
            current = current.next;

            previous = undefined;
        }
    }
}



let myLinkedList = new LinkedList();

myLinkedList.insertAtHead(100);
myLinkedList.insertAtHead(101);
myLinkedList.insertAtHead(102);

myLinkedList.removeFromIndex(1);

myLinkedList.printLinkedList();

myLinkedList.freeList();
myLinkedList.printLinkedList();