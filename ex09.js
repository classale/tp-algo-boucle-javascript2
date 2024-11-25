// ex09.js

function sumEvenNumbers(arr) {
	let out = 0;
    for(let el of arr) if(el % 2 == 0) out += el;
    return out;
}

// Exemples de test :
console.log(sumEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 6
console.log(sumEvenNumbers([7, 11, 18])); // Résultat attendu : 18  