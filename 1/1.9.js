String.prototype.isSubString = function(comparingValue){
    const value = this;

    for(let i = 0; i < comparingValue.length; i++){
        if(value.indexOf(comparingValue.substr(0, i)) === -1){
            const temp = comparingValue.substr(i-1) + comparingValue.substr(0, i-1);
            if(temp == value){
                return true;
            }
            break;
        }
    }
    return false;
}