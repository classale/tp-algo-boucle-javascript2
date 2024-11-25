// ex15.js

function reduce(matrix) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[y].length; x++) {
            if(x )
        }
    }
}


function spiralTraversal(matrix) {
    let out = [];
    let nums = [];
    let size = matrix.length;
    let x = 0;
    let y = 0;
    let angle = 0;
    for(let i = 0; i < size; i++) {
        nums.push(matrix[y][x]);
        if(x + Math.round(Math.cos(angle)) >= matrix.length) angle += Math.PI / 2;
        if(y + Math.round(Math.sin(angle)) >= matrix.length) angle += Math.PI / 2;
        if(x + Math.round(Math.cos(angle)) < 0) angle += Math.PI / 2;
        console.log((angle / Math.PI) * 180, x, y)
        x += Math.round(Math.cos(angle))
        y += Math.round(Math.sin(angle))
    }
    console.log(nums)
    return out;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Exemples de test:
console.log(spiralTraversal(matrix)); // Résultat attendu : [1, 2, 3, 6, 9, 8, 7, 4, 5]