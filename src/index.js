'use strict'

const fibonacci = () => {
    let fibarray = [0,1];
    let next = 0;

    for (let index = 0; next < 350; index ++){
        next = fibarray[fibarray.length - 1] + fibarray[fibarray.length -2];
        fibarray.push(next);
    }
    
    return fibarray;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
