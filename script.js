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

// console.log("Hello Eng/menna this is Sarah Amr's Lab2");

// // 1. Write a JavaScript program to sort the items of an array.
// // Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // Sample Output : -4,-3,1,2,3,5,6,7,8


// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// console.log(arr1.sort(function sort (a,b) {
//     return a - b;
// }));

// // 2. Write a JavaScript function that accepts
// // a string as a parameter and 
// // find the longest word within the string.
// // Sample Data and output:
// // Example string: 'Web Development Tutorial'
// // Expected Output: 'Development'


// var x = 'Web Development Tutorial'
// // console.log(x.length);
// var y = x.split(" ");
// // console.log(x.split(" "));
// // console.log(y);
// // console.log(y.length);

// function longest_word(string) {
//     longest_word = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].length > longest_word.length) {
//             longest_word = string[i]
//         } 
//     }
//         return longest_word
// }

// console.log(longest_word(y));


// // 3. Write a JavaScript function that
// // accepts a number as a parameter and--> done
// // check the number is prime or not.
// // Note : A prime number (or a prime) 
// // is a natural number greater than 1 that has  ---> done 
// // no positive divisors other than 1 and itself. --> done


// function prime_num(num) {
//     if (num < 1) {
//         return  "NUmber " + num + " is Not Accepted";
//     }

//     for ( var i  = 2  ; i <= Math.sqrt(num) ; i ++) {
//         if (num % i === 0 )
//             return "NUmber " + num + " is Not Accepted";
//     }
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



// function coinsneeded(amount , coins) { 
//      var sum_coins = [];

//      for ( var i = 0 ; i <= coins.length ; i++ ) { 
//         while (coins[i] <= amount) {
//             sum_coins.push(coins[i]);
//             amount -= coins[i];  
//         }
//      }  
//     return sum_coins;
// }
// console.log(coinsneeded(46, [25, 10, 5, 2, 1]));

//////////////////////////////// LAB3 ///////////////////////////////////////

console.log("Hello Eng/menna this is Sarah Amr's Lab3");


// // 1)  you are required to, given a string, replace every letter with its position in the alphabet
// // If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
// // Example: alphabet_position("The sunset sets at twelve o' clock.") 
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabet_position(string) {
    return string
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z]/g,"")
        .split("")
        .map (function (stringcode){
            return stringcode.charCodeAt(0) - 'a'.charCodeAt(0) + 1
        })
        .join(" ")     
    
}
var alphabet = "The sunset sets at twelve o' clock.";
console.log(alphabet_position(alphabet));


// var alphabet = alphabet.toLocaleLowerCase();
// // filter only characters .. cant use replace with arrays 
// var aplphapet_filter = alphabet.replace(/[^a-zA-Z]/g,"");
// // console.log(aplphapet_filter)
// var alphabet_arr = aplphapet_filter.split("");
// // console.log(aplphapet_arr);
// var x = alphabet_arr.map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
// // .map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) //its a function (char =>)
// // converted to unicode then the unicode minus itself +1 to return it to 1
// console.log(x);





// // 2) Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// // If the input string is empty, return an empty string. 
// // The words in the input String will only contain valid consecutive numbers.
// // Examples
// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""
		
x = "is2 Thi1s T4est 3a"
y = "4of Fo1r pe6ople g3ood th5e the2"

function sortingStr_onNum(string) {
    if (string === "") {
        "";
    }
    return string
    .split(" ")
    .sort(function sorting(a,b) {
        var a = a.match(/\d/)[0]
        var b = b.match(/\d/)[0]
        return a - b
    })
    .join(" ");
}

console.log(x + " --> " + sortingStr_onNum(x));
console.log(y + " --> " + sortingStr_onNum(y));

// var string = "is2 Thi1s T4est 3a"

// if(string === ""){
//      "";
// }

// var string = string.split(" ")
// console.log(string)
// function sorting(a,b) {
//         var a = a.match(/\d/)[0];
//         var b = b.match(/\d/)[0];
//         return a - b;
// }
// var sorted_arr = string.sort(sorting)
// console.log(string.sort(sorting));
// var sorted_string = sorted_arr.join(" ");
// console.log(sorted_string);




// // 3) Write a function called specialMultiply which accepts two parameters. 
// If the function is passed both parameters, it should return the product of the two.
//  If the function is only passed one parameter -
//  it should return a function which can later be passed another parameter to return the product.
//  You will have to use closure and arguments to solve this.

// // Examples:
// // specialMultiply(3,4); // 12 
// // specialMultiply(3)(4); // 12 
// // specialMultiply(3); // function(){}....


function specialMultiply(a,b) {
    if (b === undefined){
        return function second_specialMultiply(c) {
            return a * c;
        };
    }
    return a * b;
}
console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));


// // 4) Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// // In the inner function, if the guess passed in is the same as the random number (defined in the outer function) -
//  you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, 
// return "Your guess is too low!". You should stop the user from guessing 
// if the amount of guesses they have made is greater than the initial amount passed to the outer function.

// // You will have to make use of closure to solve this problem.
// // Examples (yours might not be like this, since the answer is random every time): 
// // var game = guessingGame(5) 
// // game(1) // "You're too low!" 
// // game(8) // "You're too high!" 
// // game(5) // "You're too low!" 
// // game(7) // "You got it!" 
// // var game2 = guessingGame(3) 
// // game2(5) // "You're too low!" 
// // game2(3) // "You're too low!" 
// // game2(1) // "No more guesses the answer was 0" 

