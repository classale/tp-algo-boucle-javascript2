// ex01.js

function findMax(arr) {
	let max = arr[0];
    for(let el of arr) {
        if(el > max) max = el;
    }
    return max;
}

// Exemples de test :
console.log(findMax([1, 3, 7, 2])); // Résultat attendu : 7
console.log(findMax([-5, -1, -10])); // Résultat attendu : -1