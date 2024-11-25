// ex08.js

function containsElement(arr, element) {
	for(let el of arr) if(el == element) return true;
    return false;
}

// Exemples de test :
console.log(containsElement([1, 2, 3], 2)); // Résultat attendu : true
console.log(containsElement([4, 5, 6], 1)); // Résultat attendu : false