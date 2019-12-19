const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function fearNotLetter(str) {
    return abc.find((element,index) => {
        if(element === str[0]){
           
           let algo = abc[index + 1] === str[1];
           return algo;
        }
    });
    
  }
  
  console.log(fearNotLetter("abce"));
  fearNotLetter("stvwx");
  fearNotLetter("bcdf");