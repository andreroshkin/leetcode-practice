/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
// Sieve of Eratosthenes
function countPrimes(n: number): number {
    let primesCounter: number = 0;
    if (n <= 2) return primesCounter;
    const primes: boolean[] = [];
    const upperLimit: number = Math.sqrt(n);

    for (let index = 0; index < n; index++) {
        primes.push(true);
    }

    for (let index = 2; index < upperLimit; index++) {
        if (primes[index]) {
            for (let j = index * index; j < n; j += index) {
                primes[j] = false;
            }
        }
    }

    for (const number of primes) {
        if (number) {
            primesCounter++
        }
    }

    return primesCounter;
};
// @lc code=end

