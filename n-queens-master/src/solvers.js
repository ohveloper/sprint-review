/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting
window.searchWtRecursion = function (row, n, board, hasConflict, callback) {
  // if all rows exhaused (=== no more row), we find a valid solution
  if (row == n) {
    return callback();
  }

  // loop through candidates at the given row
  for (let col = 0; col < n; col++) {
    // place a piece
    board.togglePiece(row, col);

    // if this candidate is promising
    if (hasConflict() === false) {
      // if (hasConflict(row, col) === false) {

      // recurse into remaining problem
      const result = searchWtRecursion(
        row + 1,
        n,
        board,
        hasConflict,
        callback
      );
      if (result === true) {
        return true;
      }
    }

    // uplace a piece
    board.togglePiece(row, col);
  }

  return false;
};

// n이 주어졌을 때 n rooks 문제의 해답 한 개를 반환합니다.
// 반환 값은 체스 판을 나타내는 2차원 배열입니다.
window.findNRooksSolution = function (n) {
  const board = new Board({ n: n });
  const hasConflict = board['hasAnyRooksConflicts'].bind(board);
  // const hasConflict = board['hasAnyRooksConflictsOn'].bind(board);

  searchWtRecursion(0, n, board, hasConflict, function () {
    return true;
  });

  const solution = board.rows(); // fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// n이 주어졌을 때 n rooks 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNRooksSolutions = function (n) {
  const board = new Board({ n: n });
  const hasConflict = board['hasAnyRooksConflicts'].bind(board);
  // const hasConflict = board['hasAnyRooksConflictsOn'].bind(board);
  let solutionCount = 0; // fixme

  searchWtRecursion(0, n, board, hasConflict, function () {
    solutionCount++;
    return false;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// n이 주어졌을 때 n queens 문제의 해답 한 개를 반환합니다.
// 반환 값은 체스 판을 나타내는 2차원 배열입니다.
window.findNQueensSolution = function (n) {
  const solution = undefined; // fixme

  console.log(
    'Single solution for ' + n + ' queens:',
    JSON.stringify(solution)
  );
  return solution;
};

// n이 주어졌을 때 n queens 문제의 전체 해답 개수를 반환합니다.
// 반환 값은 정수입니다.
window.countNQueensSolutions = function (n) {
  let solutionCount = undefined; // fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
