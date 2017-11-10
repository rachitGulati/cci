String.prototype.compress = function(){
    let string = this;
    let newString = '';
    let canBeCompressed = false;
    let previousChar = string[0];
    let previousCharCount = 1;

    for(let i = 1; i < string.length; i++) {
        if(previousChar === string[i]){
            previousCharCount++;
            if(previousCharCount > 1){
                canBeCompressed = true;
            }
        } else {
            newString += previousChar + previousCharCount
            previousChar = string[i]
            previousCharCount = 1;
        }
    }
    newString += previousChar + previousCharCount
    if(!canBeCompressed){
        return string;
    }
    return newString;
}