String.prototype.URLify = function(){
    let value = this;
    let newVal = '';
    if(value.length === 0){
        return value;
    }
     for(let i = 0; i < value.length; i++){
         if(value.substr(i, 1) === ' '){
             newVal +='%20';
         } else {
          newVal += value.substr(i, 1);
        }
     }
    return newVal;
};