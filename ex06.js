// ex06.js

function generateNumbers(n) {
	const out = [];
    for(let i = 0; i < n; i++) {
        out.push(i);
    }
    return out;
}

// Exemples de test :
console.log(generateNumbers(5)); // Résultat attendu : [0, 1, 2, 3, 4]
console.log(generateNumbers(3)); // Résultat attendu : [0, 1, 2]