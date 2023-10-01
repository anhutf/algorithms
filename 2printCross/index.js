const matrixSize = Number(prompt("Input matrix size"));
const matrix = Array(matrixSize).fill(null);

for (let i = 0; i < matrixSize; i++) {
  matrix[i] = Array(matrixSize).fill(null);
  for (let j = 0; j < matrixSize; j++) {
    matrix[i][j] = prompt(`Input maxtrix[${i}][${j}] value`);
  }
}

const createMatrix = (size) => {};

const printCross = [];
for (let j = matrixSize - 1; j >= 0; j--) {
  printCross[matrixSize - j - 1] = [];
  for (let i = 0; i < matrixSize - j; i++) {
    printCross[matrixSize - j - 1].push(matrix[i][j + i]);
  }
}

for (let i = 1; i < matrixSize; i++) {
  printCross[matrixSize - 1 + i] = [];
  for (let j = 0; j < matrixSize - i; j++) {
    printCross[matrixSize - 1 + i].push(matrix[i + j][j]);
  }
}

console.log("Input matrix:", matrix);
console.log("Print cross", printCross);
