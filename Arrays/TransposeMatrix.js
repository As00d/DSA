var transpose = function (matrix) {
  let row = matrix.length;
  let column = matrix[0].length;
  const mat = Array.from({ length: column }, () => new Array(row).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      mat[j][i] = matrix[i][j];
    }
  }
  return mat;
};

transpose([
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
]);
