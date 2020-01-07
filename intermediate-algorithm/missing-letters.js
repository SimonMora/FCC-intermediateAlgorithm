const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function fearNotLetter(str) {
    let result;

    abc.find((element,index) => {
        if(element === str[0]){
           for (let i = 1; i<str.length; i++ ){
                
                let algo = abc[index + i] === str[i];
                
                if(!algo){
                    result = abc[index + i];
                    break;
                }
                // console.log(abc[index + i]+' '+str[i]);
                // console.log(algo);
                
           }
        }
    });
    
    return result;

  }
  
  console.log(fearNotLetter("stvwx"));
  fearNotLetter("stvwx");
  fearNotLetter("bcdf");