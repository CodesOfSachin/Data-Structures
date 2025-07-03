class Queue {
    constructor() {
        this.queue = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.queue[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if(this.isEmpty()) {
            return `Queue is empty! Can't perform dequeue operation.`;
        }
        const element = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return element;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return (this.rear - this.front).toString();
    }

    print() {
        if(this.isEmpty()) {
            return `Queue is empty!`;
        }
        console.log(this.queue);
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