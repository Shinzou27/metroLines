/*
Alunos: Ana Gabriela da Silva Bezerra
        Carlos Vinicius Bezerra Lopes
        Felipe Cassiano Barbosa
        Gabriela Araujo de Abreu

Reflexividade: todas as entradas na diagonal principal da matriz de adjacência serão 1.

Simetria: a matriz de adjacência é igual a sua transposta.

Assimetria: a matriz de adjacência não terá nenhum elemento da diagonal principal igual a 1 e, além disso, sempre que um elemento Mij = 1, então Mji = 0.

Antissimetria: se um elemento Mij = 1, então Mji = 0.para i ≠ j.

Transitividade: dada uma matriz A, se a posição (i,j) e a posição (j,k) são iguais a 1, então a posição (i,k) também deve ser igual a 1.
*/



class LinearAlgebra {

    transpose(a) {
        var matrizTransposta = [];
        for (var m = 0; m < a[0].length; m++) {
            matrizTransposta[m] = [];
            for (var n = 0; n < a.length; n++) {
                matrizTransposta[m][n] = a[n][m];
            }
        }
        return matrizTransposta
    }

    sum(a, b) {
        var matrizSoma = [];
        for (var m = 0; m < a.length; m++) {
            matrizSoma[m] = [];
            for (var n = 0; n < a[0].length; n++) {
                matrizSoma[m][n] = a[m][n] + b[m][n];
            }
        }
        return matrizSoma
    }

    times(a, b) {
        var soma = 0;
        var matrizTimes = [];                               //   a   *   b   =   X
        if (!isNaN(a)){
            for (var n = 0; n < b.length; n++) {            // m x n   n x p   m x p
                matrizTimes[n] = [];
                for (var p = 0; p < b[0].length; p++) {
                    matrizTimes[n][p] = b[n][p] * a;
                }
            } 
        }
        else {
            for (var m = 0; m < a.length; m++) {
                matrizTimes[m] = [];
                for (var p = 0; p < b[0].length; p++) {
                    for (var i = 0; i < b.length; i++) {
                        soma += a[m][i] * b[i][p]; 
                    }
                    matrizTimes[m][p] = soma;
                    soma = 0;
                }
            }
        }
        return matrizTimes;
    }

    dot(a, b) {
        var soma = 0;
        var matrizDot = [];                               //   a   *   b   =   X
        for (var m = 0; m < a.length; m++) {                // m x n   n x p   m x p
            matrizDot[m] = [];
            for (var p = 0; p < b[0].length; p++) {
                for (var i = 0; i < b.length; i++) {
                    soma += a[m][i] * b[i][p]; 
                }
                matrizDot[m][p] = soma;
                soma = 0;
            }
        }
        return matrizDot;        
    }
}

const la = new LinearAlgebra();
const div = document.getElementById('results')

//Debug        1  2  3  4  5  6
const test = [[1, 0, 0, 0, 1, 0], 
              [0, 1, 0, 1, 1, 1], 
              [0, 0, 0, 0, 1, 0], 
              [0, 1, 0, 1, 0, 0], 
              [1, 1, 1, 0, 1, 0], 
              [0, 1, 0, 0, 0, 1],]

console.log(isSymmetric(test))
writeMatrix(test)
writeResults([
    false,
    isSymmetric(test),
    true,
    true,
    false
    ]);


//Funções para escrever no documento
function writeResults(results) {
    const classifications = [" reflexiva.", " simétrica.", " assimétrica.", " anti-simétrica.", " transitiva."]
    results.forEach(value => {
        const p = document.createElement('p');
        p.innerText = "A relação " + (value ? "É" : "NÃO É") + classifications.shift();
        div.appendChild(p);
    });
}

function writeMatrix(matrix) {
    const matrixDocument = document.createElement('h6');
    matrixDocument.innerHTML = "MATRIZ ORIGINAL:<br><br>"
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            matrixDocument.innerHTML += matrix[i][j] + "\t";
        }
        matrixDocument.innerHTML += '<br>'
    }
    div.appendChild(matrixDocument)
}

//Funções para implementar
function isReflexive(matrix) {
    
}

function isSymmetric(matrix) {
    const transpose = la.transpose(matrix)
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != transpose[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function isAsymmetric(matrix) {
    
}

function isAntiSymmetric(matrix) {
    
}

function isTransitive(matrix) {
    
}