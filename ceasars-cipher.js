const cde = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function rot13(str) { // LBH QVQ VG!
    
    let any = str.split('');
    let result = [];

    any.map(letter =>{
        if(letter.match(/\W/)) result.push(letter);
        if(cde.indexOf(letter) === -1){

        }else if(cde.indexOf(letter)+13 > 25) {
            result.push(cde[cde.indexOf(letter)+13-26]);
        } else if (cde.indexOf(letter)+13 <= 25) {
            result.push(cde[cde.indexOf(letter)+13]);
        }
    });

    console.log(result.join(''));
    console.log(cde.indexOf('M'));
    
    return result.join('');
  }
  
  // Change the inputs below to test
//   rot13("SERR PBQR PNZC");
//   rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
  rot13("SERR CVMMN!");