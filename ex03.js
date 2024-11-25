// ex03.js

function multiplyArray(arr, multiplier) {
	const out = [];
    for(let el of arr) out.push(el * multiplier);
    return out;
}

// Exemples de test :
console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3)); // Résultat attendu : [12, 0, -9]