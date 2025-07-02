class Stack {
    constructor () {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform pop.`
        }

        return this.stack.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform peek.`
        }


        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.stack.length;
    }

    printStack() {
        if(this.isEmpty()) {
            return `Stack is Empty! Can't perform printStack.`
        }
        return this.stack;
    }
}

// Push, POP, peek, isempty, size

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(`-------------------------------------------------------------------------------------------`);


console.log(stack.printStack());
console.log(`-------------------------------------------------------------------------------------------`);


stack.pop();
stack.pop();
stack.pop();


console.log(stack.peek());