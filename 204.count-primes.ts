/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
// Sieve of Eratosthenes
function countPrimes(n: number): number {
    const seen: boolean[] = new Array(n).fill(false);
    let primesCounter = 0;
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue;
        primesCounter++;
        for (let mult: number = num * num; mult < n; mult += num) seen[mult] = true;
    }
    return primesCounter;
}
// @lc code=end
