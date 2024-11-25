// ex10.js

function calculateAverage(arr) {
	if(arr.length == 0) return 0;
    let out = 0;
    for(let el of arr) out += el;
    out /= arr.length;
    return out;
}

// Exemples de test :
console.log(calculateAverage([2, 4, 6, 8])); // Résultat attendu : 5
console.log(calculateAverage([10, 20, 30])); // Résultat attendu : 20