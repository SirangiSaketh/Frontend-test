//question1
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 

//question 2
function isPalindrome(str) {
    str = str.toLowerCase();

    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
//question 3
function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max; 
}

console.log(findMax([3, 1, 4, 1, 5, 9]));
//question 4
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//question 5
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
//question 6
function fibonacci(n) {
    if (n <= 0) {
        return [];
    }

    const series = [0, 1]; 
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]); 
    }

    return series.slice(0, n); 
}

console.log(fibonacci(5));


//question 7
function areAnagrams(str1, str2) {

    let sortedStr1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));

//question 8
function secondLargest(arr) {
    if (arr.length < 2) {
        return null; 
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; 
}

console.log(secondLargest([10, 20, 4, 45, 99])); 

//question 9

function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum; 
}

console.log(findMissingNumber([1, 2, 4, 5])); 

//Question-11

function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Expected output: [1, 2, 3, 4, 5, 6]



//OUTPUT BASED 

// ---1---

"122"
"32"
"02"
"112"
"NaN2"
NaN

// ----2---

False 

// ---3---

{ name: "John" }

// -----4---

function sum(...args) {
    return function(...nextArgs) {
        const total = args.concat(nextArgs).reduce((acc, curr) => acc + curr, 0);
        return total;
    };
}

//-----8----
"number"

//--10---

undefined
5

//----9--
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

