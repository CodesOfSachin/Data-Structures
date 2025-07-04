class Stack {
    constructor() {
        this.stack = {};
        this.top = 0;
    }

    push(element) {
        this.stack[this.top] = element;
        this.top++;
    }

    pop() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform pop.`
        }
        const element = this.stack[this.top - 1];
        delete this.stack[this.top - 1];
        this.top--;
        return element;
    }

    peek() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform peek.`
        }


        return this.stack[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    size() {
        return this.top;
    }

    printStack() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform printStack.`
        }
        return this.stack;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(`-------------------------------------------------------------------------------------------`);


console.log(stack.printStack());
console.log(`-------------------------------------------------------------------------------------------`);


console.log(stack.pop())
console.log(stack.pop())
// stack.pop();

console.log(stack.printStack());

// console.log(stack.peek());