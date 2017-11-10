String.prototype.isUnique = function(){
	const value = this;
    const uniqueKeeper = {};
	for(let i = 0; i < value.length; i++){
        let character = value[i];
        if(uniqueKeeper[character]){
            return false;
        }
        uniqueKeeper[character] = true;
    }
    return true;
}
