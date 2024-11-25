// ex04.js

function filterPositiveNumbers(arr) {
	const out = [];
    for(let el of arr) if(el > 0) out.push(el);
    return out;
}

// Exemples de test :
console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []