/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */

// The trick here is to realize that cells in our matrix (M) can be swapped out in groups of four in a self-contained manner. This will allow us to keep our space complexity down to O(1).

// The remaining difficulty lies in setting up our nested for loops to accomplish the entirety of these four-way swaps. If we consider each ring of data as a larger iteration, we can notice that each successive ring shortens in the length of its side by 2. This means that we will need to perform this process to a maximum depth of floor(n / 2) times. We can use floor here because the center cell of an odd-sided matrix will not need to be swapped.

// For each ring, we'll need to perform a number of iterations equal to the length of the side minus 1, since we will have already swapped the far corner as our first iteration. As noticed earlier, the length of the side of a ring is shortened by 2 for each layer of depth we've achieved (len = n - 2 * i - 1).

// Inside the nested for loops, we need to perform a four-way swap between the linked cells. In order to save on some processing, we can store the value of the opposite side of i (opp = n - 1 - i) as that value will be reused many times over.

// [x][ ][ ][ ][x]
// [ ][ ][ ][ ][ ]
// [ ][ ][ ][ ][ ]
// [ ][ ][ ][ ][ ]
// [x][ ][ ][ ][x]
// i = 0
// j = 0

// [ ][x][ ][ ][ ]
// [ ][ ][ ][ ][x]
// [ ][ ][ ][ ][ ]
// [x][ ][ ][ ][ ]
// [ ][ ][ ][x][ ]
// i = 0
// j = 1

// [ ][ ][x][ ][ ]
// [ ][ ][ ][ ][ ]
// [x][ ][ ][ ][x]
// [ ][ ][ ][ ][ ]
// [ ][ ][x][ ][ ]
// i = 0
// j = 2

// [ ][ ][ ][x][ ]
// [x][ ][ ][ ][ ]
// [ ][ ][ ][ ][ ]
// [ ][ ][ ][ ][x]
// [ ][x][ ][ ][ ]
// i = 0
// j = 3

// [ ][ ][ ][ ][ ]
// [ ][x][ ][x][ ]
// [ ][ ][ ][ ][ ]
// [ ][x][ ][x][ ]
// [ ][ ][ ][ ][ ]
// i = 1
// j = 0

// [ ][ ][ ][ ][ ]
// [ ][ ][x][ ][ ]
// [ ][x][ ][x][ ]
// [ ][ ][x][ ][ ]
// [ ][ ][ ][ ][ ]
// i = 1
// j = 1

function rotate(matrix: number[][]): void {
  const matrixLength: number = matrix.length;
  const matrixDepth: number = matrixLength / 2;
  let tmp = 0;
  let i: number;
  let j: number;

  for (i = 0; i < matrixDepth; i++) {
    for (j = i; j < matrixLength - 1 - i; j++) {
      tmp = matrix[i][j];
      matrix[i][j] = matrix[matrixLength - 1 - j][i];
      matrix[matrixLength - 1 - j][i] = matrix[matrixLength - 1 - i][matrixLength - 1 - j];
      matrix[matrixLength - 1 - i][matrixLength - 1 - j] = matrix[j][matrixLength - 1 - i];
      matrix[j][matrixLength - 1 - i] = tmp;
    }
  }
}
// @lc code=end
