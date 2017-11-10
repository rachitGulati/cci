String.prototype.permutationOf = function (secondValue){
    let firstValue = this;
    let characterMapper = {};
    if(firstValue.length !== secondValue.length) {
        return false;
    }
    for(let  i = 0; i < firstValue.length; i++) {
        if(characterMapper[firstValue[i]]){
            characterMapper[firstValue[i]] = characterMapper[firstValue[i]] + 1;
        } else {
            characterMapper[firstValue[i]] = 1;
        }
    }

    for(let  i = 0; i < secondValue.length; i++) {
        if(!characterMapper[secondValue[i]]){
            return false;
        }
        characterMapper[secondValue[i]] = characterMapper[secondValue[i]] - 1;
        if(characterMapper[secondValue[i]] < 0){
            return false;
        }
    }
    return true;
    
};
