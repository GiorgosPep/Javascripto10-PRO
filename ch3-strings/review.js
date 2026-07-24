//Άσκηση 1
//Μία συνάρτηση που παίρνει ως παράμετρο ένα string
//και επιστρέφει νέο string με τους χαρακτήρες
//σε αντίστροφη σειρά

// function reverseString(str) {
//     let strReturned = '';
//     for(i=length-1; i===0; i--){
//         strReturned += str[i];
//     }
//     return strReturned;
// }

function reverseString2(str) {
    return str.trim().split('').reverse().join('');
}

let str = 'Hello World';
// console.log(reverseString(str));
console.log(reverseString2(str));

//Άσκηση 2
//Μία συνάρτηση που να ελέγχει αν ένα string είναι παλινδρομικό
//αγνοώντας πεζά και κεφαλαία γράμματα.
//επιστρέφει boolean.

function isPalindrome(str) {
    let strReversed = reverseString2(str.toLowerCase());
    let isPalindrome = str.toLowerCase() === strReversed;
    return isPalindrome;
}

//Άσκηση 3
//Μία συνάρτηση μετράει πόσα φωνήεντα
//[a, e, i, o, u] περιέχει ένα string 
//ανεξαρτήτως κεφαλαίων/πεζών και επιστρέφει τον αριθμό τους.

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const item of str.toLowerCase()) {
        if (vowels.includes(item)) {
            count++;
        }
    }
    return count;
}