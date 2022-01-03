/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let num: number = 1; num <= n; num++) {
        if (num % 15 === 0){
            result.push('FizzBuzz')
        } 
        else if (num % 5 === 0){
            result.push('Buzz')
        }
        else if (num % 3 === 0){
            result.push('Fizz')
        }
        else {
            result.push(num.toString())
        }    
    }
    return result
};
// @lc code=end

