/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    minStack: number[];
    stack: number[];
    constructor() {
        this.stack = []
        this.minStack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0 || val <= this.getLastElement(this.minStack)) {
            this.minStack.push(val);
        }
        this.stack.push(val)
    }

    pop(): void {
        if(this.getLastElement(this.minStack) === this.getLastElement(this.stack)) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    top(): number {
        return this.getLastElement(this.stack);
    }

    getMin(): number {
        return this.getLastElement(this.minStack);
    }

    getLastElement(stack): number {
        return stack[stack.length - 1] 
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

