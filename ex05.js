// ex05.js

function countVowels(str) {
	let out = 0;
    for(let char of str) if(/(a|e|i|o|u|y)/.test(char.toLowerCase())) out++;
    return out;
}

// Exemples de test :
console.log(countVowels("hello")); // Résultat attendu : 2
console.log(countVowels("xyz")); // Résultat attendu : 1