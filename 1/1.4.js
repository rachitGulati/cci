String.prototype.isPalindromPermutation = function(){
    let string = this;
    let newString = '';
    newString = string.replace(/ /g,'').toLowerCase();
    let length = newString.length;
    let charcterMapperCount = {};
    for(let i = 0; i < newString.length; i++){
        if(charcterMapperCount[newString[i]]){
            charcterMapperCount[newString[i]] += 1
        } else {
            charcterMapperCount[newString[i]] = 1;
        }
    }
    let oddCharCount = Object.values(charcterMapperCount).filter(val => val%2 === 1).length;
    if(length % 2 === 0 && oddCharCount === 0){
        return true;
    }
    if(length % 2 === 1 && oddCharCount === 1){
        return true;
    }
    return false;
}