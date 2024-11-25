// ex07.js

function countOccurrences(arr, target) {
	let out = 0;
    for(let el of arr) {
        if(el == target) out++;
    }
    return out;
}

// Exemples de test :
console.log(countOccurrences([1, 2, 2, 3], 2)); // Résultat attendu : 2
console.log(countOccurrences([5, 5, 5, 1], 5)); // Résultat attendu : 3