function palindrome(str) {
    // Good luck!
    return str.split(/[^a-zA-Z0-9]+|_/).join('').split('').reverse().join('').toLowerCase() === str.split(/[^a-zA-Z0-9]+|_/).join('').split('').join('').toLowerCase();
  }
  
console.log(palindrome("nope"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("_eye"));

