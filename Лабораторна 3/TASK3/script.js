const N = 7;
const M = 5; 

const matrix = [];
for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < M; j++) {
        row.push(Math.floor(Math.random() * 21) - 10);
    }
    matrix.push(row);
}
console.log(matrix);
let positiveCount = 0;
for (const row of matrix) {
    for (const element of row) {
        if (element > 0) {
            positiveCount++;
        }
    }
}
console.log(positiveCount);
let nul = 0;
for (const row of matrix) {
    if (!row.includes(0)) {
        nul++;
    }
}
console.log(nul);
let Zero = 0;
for (let j = 0; j < M; j++) {
    let hasZero = false;
    for (let i = 0; i < N; i++) {
        if (matrix[i][j] === 0) {
            hasZero = true;
            break;
        }
    }
    if (hasZero) {
        Zero++;
    }
}
console.log(Zero);
let longestSeries = -1;
let maxSeriesLength = 0;
for (let i = 0; i < N; i++) {
    let currentSeriesLength = 1;
    for (let j = 1; j < M; j++) {
        if (matrix[i][j] === matrix[i][j - 1]) {
            currentSeriesLength++;
        } else {
            currentSeriesLength = 1;
        }
        if (currentSeriesLength > maxSeriesLength) {
            maxSeriesLength = currentSeriesLength;
            longestSeries = i;
        }
    }
}
console.log(longestSeries);
let dobutok = 1;
for (const row of matrix) {
    let hasNegative = false;
    for (const element of row) {
        if (element < 0) {
            hasNegative = true;
            break;
        }
    }
    if (!hasNegative) {
        for (const element of row) {
            dobutok *= element;
        }
    }
}
console.log(dobutok);
let suma = Array(M).fill(0);
for (let j = 0; j < M; j++) {
    let hasNegative = false;
    for (let i = 0; i < N; i++) {
        if (matrix[i][j] < 0) {
            hasNegative = true;
            break;
        }
    }
    if (!hasNegative) {
        for (let i = 0; i < N; i++) {
            suma[j] += matrix[i][j];
        }
    }
}
console.log(suma);
let suma2 = Array(M).fill(0);
for (let j = 0; j < M; j++) {
    let hasNegative = false;
    for (let i = 0; i < N; i++) {
        if (matrix[i][j] < 0) {
            hasNegative = true;
            break;
        }
    }
    if (hasNegative) {
        for (let i = 0; i < N; i++) {
            suma2[j] += matrix[i][j];
        }
    }
}
console.log(suma2);
function transposeMatrix(matrix) {
    const N = matrix.length;
    const M = matrix[0].length;
    const transposedMatrix = Array(M).fill().map(() => []);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            transposedMatrix[j].push(matrix[i][j]);
        }
    }
    return transposedMatrix;
}
const transposed = transposeMatrix(matrix);
console.log(transposed);