String.prototype.oneAway = function (secondValue){
    let firstValue = this;
    let characterMapper = {};
    for(let  i = 0; i < firstValue.length; i++) {
        if(characterMapper[firstValue[i]]){
            characterMapper[firstValue[i]] = characterMapper[firstValue[i]] + 1;
        } else {
            characterMapper[firstValue[i]] = 1;
        }
    }

    for(let  i = 0; i < secondValue.length; i++) {
        if(!characterMapper[secondValue[i]]){
            characterMapper[secondValue[i]] = -1;
        }
        characterMapper[secondValue[i]] = characterMapper[secondValue[i]] - 1;
    }
    
    let finalCount = Object.values(characterMapper).reduce(function(result, singleVal){
        result+=singleVal;
        return result;
    }, 0);
    
    if(result === 0 || result === 1) return true;
    
    return false;
};
