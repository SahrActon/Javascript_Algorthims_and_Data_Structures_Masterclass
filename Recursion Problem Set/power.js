// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
// power(2,5) // 32

//
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of <code>Math.pow()</code>&nbsp; - do not worry about negative bases and exponents.</p>

function power(a, b){

    if (b === 0){
        return 1;
    }
    return a *  power(a, b-1);
}

console.log(power(2,4));

/*

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
* */