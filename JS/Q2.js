function sortDescending(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr;
}

// Example usage
const numbers = [5, 2, 9, 3, 7, 1, 8, 6, 4];
const sortedDescending = sortDescending(numbers);
console.log(sortedDescending); 
