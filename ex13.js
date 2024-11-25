// ex13.js

function compressArray(arr) {
    // Initialize variables

	const out = []; // The output array.
    let num = null, // The value that is being tested to detect any change. It is also used to check what the last element was.
    iters = 0; // The number of times an element is repeated.

    // Loop through each element of the array.
    for(let el of arr) {
        // Increase the iterations variable if the number is the same as before.
        if(el == num) iters++;

        else {
            // If the element is different, take the last element and add it in an array alongside its iteration count if it wasn't null.
            // If it was null, it would mean that it was the first element of the array, in which case we ignore.
            if(num != null) out.push([num, iters]);

            // Reset the iteration count and the change the value of the variable counting what element is being repeated.
            iters = 1;
            num = el;
        }
    }
    // Add the final element, since it is the end of the array, we do not need to check if the element is the last of its repetition, since it will always be.
    // We can then finally return the output array.
    out.push([num, iters]);
    return out;
}

// Exemples de test:
console.log(compressArray([1, 1, 2, 2, 2, 3, 4, 4])); // Résultat attendu : [[1, 2], [2, 3], [3, 1], [4, 2]]