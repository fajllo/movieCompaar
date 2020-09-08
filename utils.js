function debounce(callback){
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null,args);
        },600);
    };
};