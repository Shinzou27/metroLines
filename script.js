/*
Alunos: Ana Gabriela da Silva Bezerra
        Carlos Vinicius Bezerra Lopes
        Felipe Cassiano Barbosa
        Gabriela Araujo de Abreu

Reflexividade: todas as entradas na diagonal principal da matriz de adjacência serão 1.

Simetria: a matriz de adjacência é igual a sua transposta.

Assimetria: a matriz de adjacência não terá nenhum elemento da diagonal principal igual a 1 e, além disso, sempre que um elemento Mij = 1, então Mji = 0.

Antissimetria: se um elemento Mij = 1, então Mji = 0.para i ≠ j.

*/



class LinearAlgebra {
    transpose(a) {
        let matrizTransposta = [];
        for (let m = 0; m < a[0].length; m++) {
            matrizTransposta[m] = [];
            for (let n = 0; n < a.length; n++) {
                matrizTransposta[m][n] = a[n][m];
            }
        }
        return matrizTransposta;
    }
}

const la = new LinearAlgebra();
const inputs = document.getElementById('inputs');
const div = document.getElementById('results');
const matrixSize = document.getElementById('matrixSize');
const matrixCreator = document.getElementById('matrixCreator');
const button = document.getElementById('calc');

matrixSize.addEventListener("input", () => {
    const p = document.getElementById("matrixSizeLabel");
    p.innerText = "Ordem: " + matrixSize.value;
    createInputs(matrixSize.value);
});
button.addEventListener("click", () => {
    const matrix = [];
    matrixCreator.childNodes.forEach((innerDiv) => {
        const row = [];
        innerDiv.childNodes.forEach((input) => {
            row.push(parseInt(input.value));
        });
        matrix.push(row);
    })
    showResults(matrix);
});
function createInputs(rows) {
    matrixCreator.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        const innerDiv = document.createElement('div');
        const rowColor = generateRandomColor();
        for (let k = 0; k < rows; k++) {
            const input = document.createElement('input');
            input.type = "number";
            input.style.borderColor = rowColor;
            innerDiv.appendChild(input);
        }
        matrixCreator.appendChild(innerDiv);
    }
}

//Debug          1  2  3  4  5  6
const test =   [[1, 1, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [1, 0, 1, 1, 1, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1],];

function showResults(matrix) {
    writeMatrix(matrix)
    writeResults([
        isReflexive(matrix),
        isSymmetric(matrix),
        isAsymmetric(matrix),
        isAntiSymmetric(matrix)
    ]);
}


//Funções relacionadas ao HTML
function generateRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function writeResults(results) {
    const classifications = [" reflexiva", " simétrica", " assimétrica", " anti-simétrica"]
    results.forEach(value => {
        const p = document.createElement('p');
        p.innerText = "A relação " + (value ? "É" : "NÃO É") + classifications.shift() + ".";
        div.appendChild(p);
    });
}
function writeMatrix(matrix) {
    div.innerHTML = "";
    div.style.display = 'block';
    const title = document.createElement('h6');
    const matrixDocument = document.createElement('h6');
    matrixDocument.id = 'matrix';
    title.innerHTML = "MATRIZ ORIGINAL:<br><br>";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrixDocument.innerHTML += matrix[i][j] + "&nbsp;&nbsp;";
        }
        matrixDocument.innerHTML += '<br>';
    }
    div.appendChild(title);
    div.appendChild(matrixDocument);
}

//Funções para implementar
function isReflexive(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] != 1) return false;
    }
    return true;
}

function isSymmetric(matrix) {
    const transpose = la.transpose(matrix)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != transpose[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function isAsymmetric(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][i] != 0) return false;
            if (i != j && matrix[i][j] == 1 && matrix[j][i] == 1) return false;
        }
    }
    return true;
}

function isAntiSymmetric(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (i != j && matrix[i][j] == 1 && matrix[j][i] == 1) return false;
        }
    }
    return true;
}