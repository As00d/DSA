var numSpecial = function (mat) {
  let c = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        let row = true,
          col = true;
        for (let k = 0; k < mat[0].length; k++) {
          if (k != j) {
            if (mat[i][k] == 1) {
              row = false;
              break;
            }
          }
        }
        for (let k = 0; k < mat.length; k++) {
          if (k != i) {
            if (mat[k][j] == 1) {
              col = false;
              break;
            }
          }
        }
        if (row && col) {
          c++;
        }
      }
    }
  }
  return c;
};

numSpecial([
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
]);
