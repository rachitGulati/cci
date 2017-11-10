String.prototype.permutationOf = function (secondValue){
    let firstValue = this;
    if(firstValue.length !== secondValue.length) {
        return false;
    }
    firstValue = firstValue.split('').sort().join('');
    secondValue = secondValue.split('').sort().join('');
    if(firstValue === secondValue){
        return true;
    }
    return false;
};
