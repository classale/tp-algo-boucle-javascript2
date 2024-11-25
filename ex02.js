// ex02.js

function countEvenNumbers(arr) {
	let out = 0;
    for(let el of arr) {
        if(el%2==0) out++;
    }
    return out;
}

// Exemples de test :
console.log(countEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 2
console.log(countEvenNumbers([7, 11, 19])); // Résultat attendu : 0