function convertHTML(str,regex) {
    // &colon;&rpar;
    if(!regex) regex = /['||"||<||>||&]/;
    
    let matcher = str.match(regex);
    
    if(matcher){
        let helper = str.split('');
        switch (matcher[0]) {
            case '&':
                helper.splice(matcher.index,1,'&amp;');
                break;
            case '<':
                helper.splice(matcher.index,1,'&lt;');
                break;    
            case '>':
                helper.splice(matcher.index,1,'&gt;');
                break;
            case '"':
                helper.splice(matcher.index,1,'&quot;');
                break;
            case "'":
                helper.splice(matcher.index,1,'&apos;');
                break;    
            default:
                break;
        }
        
        let result = helper.join('');
        let regexChecker = /['||"||<||>]/;

        if(result.match(regexChecker)){
            result =convertHTML(result,regexChecker);
        }

      return result;

    }else{
         
        return str;

    } 

}  
  

  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Schindler's List"));
 

  