function pairElement(str) {
    
    let helper = str.split('');
    let aux = [];
    let finalArray = [];

    helper.map((element=>{

        if(element === 'C'){

            aux.push(element);
            aux.push('G');
            finalArray.push(aux);

            aux =[];

        } else if(element === 'G'){
            
            aux.push(element);
            aux.push('C');
            finalArray.push(aux);

            aux =[];

        } else if(element === 'T'){
            
            aux.push(element);
            aux.push('A');
            finalArray.push(aux);

            aux =[];

        }else if(element === 'A'){
            
            aux.push(element);
            aux.push('T');
            finalArray.push(aux);

            aux =[];
        }
    }));
    
    console.log(finalArray);
    return finalArray;
}
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("TTGAG");
  pairElement("CTCTA");
  