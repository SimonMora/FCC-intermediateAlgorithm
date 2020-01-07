const equiv = {'X':['V','I'],'C':['L','X'],'M':['D','C']};

function letters(num,letter){
    let retorno = '';

    if(0<num && num<=3){ 
        for(let i = num; i > 0; i-- ){
            retorno += equiv[letter][1];
        }     
    } else if (3 < num && num < 5) {
        retorno = equiv[letter][1] + equiv[letter][0];
    } else if (num == 5) {
        retorno = equiv[letter][0];
    }else if (5<num && num<=8) {
        let helper = '';

        for(let i = num - 5; i > 0 ; i--){
            helper += equiv[letter][1];
        }
        
        retorno = equiv[letter][0] + helper;
    } else if (num == 9){
        retorno = equiv[letter][1] + letter;
    } else {
        
    }

    return retorno;
}

function convertToRoman(num) {
    
    let arr = num.toString().split('');
    let tope = arr.length;
    let roman = [];
    
    for(let dec of arr){

        for(let j = tope; j >= 0 ; j--){
            
            if(tope-1 === 0){
                let helper = letters(dec,'X')
                roman.push(helper);
            } 

            if(tope-1 === 1){
                let helper = letters(dec,'C')
                roman.push(helper);
            }

            if(tope-1 === 2) {
                let helper = letters(dec,'M')
                roman.push(helper);
            }

            if(tope-1 === 3) {
                let helper = '';
                for(let i = dec; i > 0; i--){
                    helper += 'M';
                }
                roman.push(helper);
            }

            tope--;
            break;
        }

    }
    console.log(roman.join(''));
    
    return roman.join('');
   }
   
   convertToRoman(36);
   
   convertToRoman(2053);

   convertToRoman(2003);
   
   convertToRoman(1874);
   
   convertToRoman(3999);