let letter = require('./letter');

class word{
    constructor(wordArray){
        this.wordArray = [];
        for(let char of wordArray){
            this.wordArray.push(new letter(char));
        }
    }
    retStr(){
        let str = "";
        for(let letObj of this.wordArray){
            str+=letObj.retLetter();
        }
        return str;
    }
    guess(char){
        let retVal = 0;
        for(let letObj of this.wordArray){
            if(!letObj.guessed){
                if(letObj.check(char)){
                    retVal+=1;
                }
            }else{
                retVal+=1;
            }
        }
        return retVal;
    }
}

module.exports=word;