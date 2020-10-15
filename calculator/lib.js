Number.prototype.fixVal = function(){
    if(this > -1 && this < 1){
        return Number(this).toFixed(1);
    }
    return this
}


let a = 0.1; 
let b = 0.2;

let c = (a+b);
console.log(c.fixVal(), "A+B");

function summ(n1, n2){
    return n1 + n2;
}

console.log(summ(2, 3), 'summ_func_result');

function minus(n1, n2){
    return n1 - n2;
}

console.log(minus(2, 3), 'minus_func_result');

function multiply(n1, n2){
    return n1 * n2;
}

console.log(multiply(2, 3), 'multiply_func_result');

function devine(n1, n2){
    return n1 / n2;
}

console.log(devine(2, 3), 'devine_func_result');

function pov(n1, n2){
    if( n2 === 1) return n1;
    return n1 * pov(n1, n2-1);
}

console.log(pov(111, 5), 'pov_func_result');

function sqrt(n1){
    return Math.sqrt(n1);
}
console.log(sqrt(-25));
console.log(parseFloat(0.1 + 0.2).toFixed());

const calculatorDisplay = 789;

const state = { 
    n1: [], 
    n2: [],
    operator: null,
    result: null
};

function stateFilling(symbol, st = state){
    if(st.operator){
        st.n2.push(symbol);
    }else{
        st.n1.push(symbol);
    }
}

function clearState(st = state){
    st.n1 = [];
    st.n2 = [];
    st.operator = null;
    st.result = null;
}

