function numberChecker(number){
    if(number.length < 10){ 
        console.log("not long enough: " + false);
        return false;
    }else if(number.length === 10){
        if(number.match(/[0-9]/g).length === 10){
            console.log("es un número porbablemente: "+ number);
            return true;
        }else{   
            return false;
        }
    }else if(number.length === 11){
        if(number.match(/^[1]/)){
            if(number.match(/[0-9]/g).length === 11){
                console.log("es un número porbablemente: "+ number);
                return true;
            }else{   
                return false;
            }
        }else {
            return false;
        }
    } else if(number.length > 11){
        return false;
    }
}

function telephoneCheck(str) {
    // Good luck!

    let workStr = str.replace(/\W/gi, ' ');
    let number = workStr.split(' ').join('');
    
    console.log(workStr.split(' ').join(''));
    
    // console.log(str.split(/\W/));
    if(str.match(/^\W/)){
        if(str.match(/^\W/)[0] !== '(') {
            return false;
        }else{
            if(str[4] !== ')'){ 
                return false;
            }else{
                return numberChecker(number);
            }
        }
    }else{
        return numberChecker(number);           
    }

  }

//   telephoneCheck("555-555-55A5");

//   telephoneCheck("1(555)555-5555");
  
//   telephoneCheck("555-5555");
  
//   telephoneCheck("1 456 789 4444");

//   console.log(telephoneCheck("-1 (757) 622-7382"));
  
//   telephoneCheck("(555-555-5555");

//   console.log( telephoneCheck("2 (757) 622-7382"));
  

//   console.log(  telephoneCheck("1 555)555-5555"));


//   telephoneCheck("(555-555-5555");

// telephoneCheck("1 (555) 555-5555")

// telephoneCheck("5555555555")

telephoneCheck("555)555-5555");

telephoneCheck("1 555)555-5555")

telephoneCheck("(555)5(55?)-5555")

//   console.log(telephoneCheck("(275)76227382")
//   );
  
  