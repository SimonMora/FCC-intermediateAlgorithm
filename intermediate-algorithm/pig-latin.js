function translatePigLatin(str) {
    let regex = /^[^aeiou]/;
    let consonants = [];
    let res = [];
    let resultado = '';

    if(str.match(regex)){
        
        consonants.push(str[0]);
        
        for(let i =1; i <str.length; i++ ){
            if(!str[i].match(/[aeiou]/)){
                consonants.push(str[i]);
            }else{
                for(j = i; j< str.length; j++){
                    res.push(str[j]);
                }
                break;
            }
        }
        
        res.push(consonants.join(''));
        resultado = res.join('') + 'ay';
        
        } else {
        
        resultado += str + "way";
        console.log(str);
      }

      return resultado;
  }
  
  console.log(translatePigLatin("paragraph"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("schwartz"));
  