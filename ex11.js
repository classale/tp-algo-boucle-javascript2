// ex11.js

function countAboveThreshold(arr, threshold) {
	let out = 0;
    for(let el of arr) if(el > threshold) out++;
    return out;
}

// Exemples de test :
console.log(countAboveThreshold([1, 5, 10, 15], 8)); // Résultat attendu : 2
console.log(countAboveThreshold([3, 2, 1], 5)); // Résultat attendu : 0