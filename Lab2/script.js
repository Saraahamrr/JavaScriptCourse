////////////////////////////// LAB2 ///////////////////////////////////////

console.log("Hello Eng/menna this is Sarah Amr's Lab2");

// 1. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(arr1.sort(function sort (a,b) {
    return a - b;
}));

// 2. Write a JavaScript function that accepts
// a string as a parameter and
// find the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'


var x = 'Web Development Tutorial'
// console.log(x.length);
var y = x.split(" ");
// console.log(x.split(" "));
// console.log(y);
// console.log(y.length);

function longest_word(string) {
    longest_word = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i].length > longest_word.length) {
            longest_word = string[i]
        }
    }
        return longest_word
}

console.log(longest_word(y));


// 3. Write a JavaScript function that
// accepts a number as a parameter and--> done
// check the number is prime or not.
// Note : A prime number (or a prime)
// is a natural number greater than 1 that has  ---> done
// no positive divisors other than 1 and itself. --> done


function prime_num(num) {
    if (num < 1) {
        return  "NUmber " + num + " is Not Accepted";
    }

    for ( var i  = 2  ; i <= Math.sqrt(num) ; i ++) {
        if (num % i === 0 )
            return "NUmber " + num + " is Not Accepted";
    }
}
//     return "NUmber " + num + " is Accepted";
// }
// console.log(prime_num(0));
// console.log(prime_num(1));
// console.log(prime_num(100));
// console.log(prime_num(23));


// // 4. Write a JavaScript function to convert an amount to coins.
// // Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// // Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// // Output : 25, 10, 10



function coinsneeded(amount , coins) {
     var sum_coins = [];

     for ( var i = 0 ; i <= coins.length ; i++ ) {
        while (coins[i] <= amount) {
            sum_coins.push(coins[i]);
            amount -= coins[i];
        }
     }
    return sum_coins;
}

console.log(coinsneeded(46, [25, 10, 5, 2, 1]));
