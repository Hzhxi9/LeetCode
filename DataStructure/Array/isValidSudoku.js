/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const len = board.length,
    set = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const target = board[i][j];
      if (target !== ".") {
        const colStr = `${target}c${i}`;
        const rowStr = `${target}r${j}`;
        const sectionStr = `${target}s(${Math.floor(i / 3)}, ${Math.floor(
          j / 3
        )})`;

        if (set.has(colStr) || set.has(rowStr) || set.has(sectionStr))
          return false;

        set.add(colStr);
        set.add(rowStr);
        set.add(sectionStr);
      }
    }
  }
  return true;
};
