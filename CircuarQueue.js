class CircularQueue {
    constructor(capacity) {
        this.circularQueue = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
       if(!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.circularQueue[this.rear] = element;
        this.currentLength += 1;
        if(this.front === -1 ) {
            this.front = this.rear;
        }
        return null;
       }
       console.log(`Queue is full! can't perform enqueue operation.`);
    }

    dequeue() {
       if(this.isEmpty()) {
        console.log(`Queue is empty! can't perform dequeue operation.`)
        return null;
       }
       const element = this.circularQueue[this.front];
       this.circularQueue[this.front] = null;
       this.front = (this.front + 1) % this.capacity;
       this.currentLength -= 1;
       if(this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
       }
       return element
    }

    peek() {
        if(this.isEmpty()) {
            console.log(`Queue is empty! can't perform peek operation.`)
        }
       console.log(this.circularQueue[this.front]);
    }

    size() {
        
    }

    print() {
        if(this.isEmpty()) {
            console.log(`Queue is empty!`);
            return;
        } else {
            let i;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.circularQueue[i] + " ";
            }
            str += this.circularQueue[i]
            console.log(str)
        }
    }
}

const cirCularQueue = new CircularQueue(5);
console.log(cirCularQueue.isEmpty());
cirCularQueue.enqueue(10);
cirCularQueue.enqueue(20);
cirCularQueue.enqueue(30);
cirCularQueue.enqueue(40);
cirCularQueue.enqueue(50);
cirCularQueue.isFull();
cirCularQueue.print();
cirCularQueue.peek();
cirCularQueue.dequeue();
cirCularQueue.peek();
cirCularQueue.print();
cirCularQueue.enqueue(60);
cirCularQueue.print();