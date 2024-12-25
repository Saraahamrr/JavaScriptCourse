//////////////////////////////// LAB1 ///////////////////////////////////////

// console.log("Hello Eng/menna this is Sarah Amr's Lab1");

// // // // 1)  Write a JavaScript conditional statement
// // // // to sort three numbers.
// // // // Display an alert box to show the result.


// // // // Sample numbers: 3, -7, 2
// // // // Output: 3, 2, -7


// function sort (num1 , num2 , num3) {

//     if (num1 > num2 && num1 > num3){
//         max = num1
//         if (num2 > num3 ){
//             mid = num2;
//             min = num3;
//         }
//         else {
//             mid = num3
//             min = num2
//         }
//     }
//     else if (num2 > num1 && num2 > num3 ){
//             max = num2
//             if (num1 > num3){
//                 mid = num1
//                 min= num3
//             }
//             else{
//                 mid = num3
//                 min = num1
//             }
//     }
//     else{
//         max = num3
//         if(num2 > num1){
//             mid = num2
//             min = num1
//         }
//         else{
//             mid = num1
//             min = num2
//         }
//     }

//     console.log("Here are the three numbers sorted in console");
//     console.log(max,mid,min);
//     return `${max}, ${mid}, ${min}`;
// }

// alert ("The sorted Numbers are : " + sort(3,-7,2))



// // // 2)  Write a JavaScript program which iterates the integers from 1 to 100.
// // //     But for multiples of three print "Fizz" instead of the number
// // //      and for the multiples of five print "Buzz".
// // //     For numbers which are multiples of both three and five print "FizzBuzz".

// for (i=1 ; i <= 100 ; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if ( i % 3 == 0){
//         console.log("Fizz");
//     }
//     else if ( i % 5 == 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }

// }


// // // // 3)  Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// var sum = 0
// for (i=1 ; i < 1000; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         sum += i;
//     }
// }

// console.log("the sum is :" , sum)


// // // // 4)  Write a JavaScript program where the program takes:
// // //        a random integer between 1 to 10,
// // // //     the user is then prompted to input a guess number.
// // //        If the user input matches with guess number,
// // // //     the program will display a message "Good Work"
// // //        otherwise display a message ‘ wrong guess, want to try again?’
// // //        if confirmed continue up to 3 times,
// // // //     if not stop the code, after 3 failed times,
// // //        display message ‘game over’.


// var min = 0
// var max = 10

// var random_num = Math.floor(Math.random() * 10 + 1);
// console.log(random_num);

// var x = prompt("please pick a random number");
// console.log(x);

// if( random_num == x ){
//     console.log("Good Work")
// }
// else{
//     var tryagain = confirm("wrong guess, want to try again?")
//     //console.log("No I don't want to try again" ,tryagain)
//     if (tryagain){
//         for(i = 1 ; i <=3 ; i++){
//             var x = prompt("please pick a random number");
//             //console.log(x);

//             if( random_num == x ){
//             console.log("Good Work")
//             break;
//             }
//             else if(random_num != x && i < 3){
//             alert("Try again you have more " + ( 3 - i ) + " chances")
//             }
//         }
//         if (random_num != x) {
//             alert("Game over");
//         }
//     }
//     else{
//         alert("Game over")
//         }
// }


//////////////////////////////// LAB2 ///////////////////////////////////////

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
    return "NUmber " + num + " is Accepted";
}
console.log(prime_num(0));
console.log(prime_num(1));
console.log(prime_num(100));
console.log(prime_num(23));


// 4. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10



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

