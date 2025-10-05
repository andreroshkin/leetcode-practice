/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const b = stack.pop()!;
            const a = stack.pop()!;

            switch (token) {
                case '+':
                    stack.push(a + b);

                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));

                    break;
            }
        } else {
            stack.push(Number(token));
        } 
    }

    return stack[0];
};

function isOperator(token: string): boolean {
    return token === '+' || token === '-' || token === '*' || token === '/';
}
// @lc code=end

