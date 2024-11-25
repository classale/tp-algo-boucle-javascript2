// ex14.js

function compareObjects(arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}

function arrayIncludesObject(array, object) {
    for(let el of array) {
        if(compareObjects(el, object)) return true;
    }
    return false;
}
let arr = [[1, 2], [2, 3]]

console.log(arrayIncludesObject(arr, [1, 2]))

function uniquePairs(arr, targetSum) {
    let out = [];
	for(let yi = 0; yi < arr.length; yi++) {
        for(let xi = 0; xi < arr.length; xi++) {
            let x = arr[xi];
            let y = arr[yi];
            if(!arrayIncludesObject(out, [x, y]) && !arrayIncludesObject(out, [y, x]) && x + y == targetSum && xi != yi) out.push([x, y]);
        }
    }
    return out;
}

// Exemples de test:
console.log(uniquePairs([1, 2, 3, 4, 5, 6, 7], 8)); // Résultat attendu : [[1, 7], [2, 6], [3, 5]]