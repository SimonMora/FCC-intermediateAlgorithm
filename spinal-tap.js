function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  let eachWord = [];
  let string = [];

  for (let i = 0; i < str.length; i++) {

    if (str[i].match(/\W|\_/)) {

      string.push(eachWord.join(''));
      eachWord = [];
      

    } else if (str[i].match(/[A-Z]/)) {

      string.push(eachWord.join(''));
      eachWord = [];
      eachWord.push(str[i].toLowerCase());
      
    } else {

      eachWord.push(str[i]);

    }

  }

  string.push(eachWord.join(''));
  eachWord = [];
  
  let result = string.filter(res => res.length > 0);
  
  return result.join('-');
}
