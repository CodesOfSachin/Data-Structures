class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return `Queue is empty! Can't perform dequeue operation.`;
        }
        return this.queue.shift();
    }

    peek() {
        if(this.isEmpty()) {
            return `Queue is empty! Can't perform peek operation.`;
        }
        return this.queue[0].toString()
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.queue.length;
    }

    print() {
        console.log(this.queue.toString());
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print();

console.log(queue.peek());
console.log(queue.dequeue());
queue.print();