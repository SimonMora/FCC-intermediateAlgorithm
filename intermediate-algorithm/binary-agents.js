let ascii = {
    32:' ',33:'!',34:'"',35:'#',36:'$',37:'%',38:'&',39:"'",40:'(',41:')',42:'*',43:'+',44:',',45:'-',46:'.',47:'/',48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',58:':',59:';',60:'<',61:'=',62:'>',63:'?',    
    65:'A',66:'B',67:'C',68:'D',69:'E',70:'F',71:'G',72:'H',73:'I',74:'J',75:'K',76:'L',77:'M',78:'N',79:'O',80:'P',81:'Q',82:'R',83:'S',84:'T',85:'U',86:'V',87:'W',88:'X',89:'Y',90:'Z',91:'[',92:'\ ',93:']',94:'^',95:'_',
    96:"`",97:'a',98:'b',99:'c',100:'d',101:'e',102:'f',103:'g',104:'h',105:'i',106:'j',107:'k',108:'l',109:'m',110:'n',111:'o',112:'p',113:'q',114:'r',115:'s',116:'t',117:'u',118:'v',119:'w',120:'x',121:'y',122:'z',123:'{',124:'|',125:'}',126:'~'
    }

function binaryAgent(str) {
    let separate = str.split(' ');
    let realString = '';
    for(let letter of separate){
        let sum = 0;
        let potencia = 7;
        for(let i=0;i<=7;i++){ 
            console.log(letter[i]);
            
            for(var j=7; j>=0;j--){
                console.log(j);
                sum += letter[i] * Math.pow(2,potencia);
                potencia--;
                break;

            }
        }
        // let sum = letter[0] * Math.pow(2,7) + letter[1] * Math.pow(2,6) + letter[2] * Math.pow(2,5) + letter[3] * Math.pow(2,4) +
        // letter[4] * Math.pow(2,3) + letter[5] * Math.pow(2,2) + letter[6] * Math.pow(2,1) + letter[7] * Math.pow(2,0);
        realString += ascii[sum];
       
    }
    
    return realString;
} 
      
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
      