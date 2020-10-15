const calcPad = document.querySelector('.calcNumbers');
var impData = document.querySelector('#inputNum');

function Render(st = state){
    console.log(st);
    if(st.result) return impData.innerText = st.result.fixVal();
    if(st.operator){
        impData.innerText = st.n2.join('');
    }else{
        impData.innerText = st.n1.join('');
    }
}

calcPad.onclick = function (event) {
    if(event.target.classList.contains('row-num') || event.target.classList.contains('bottom-row')) return;
    
    const currValue = event.target.innerText;
    const isOperator = event.target.classList.contains('calc-operator');

    if (isOperator) {
        if(currValue === 'C'){
            clearState();
            return Render();
        }
        if (state.n1.length === 0) {
            if (currValue === '—') {
                stateFilling("-");
                return  Render();
            }
        }
        if (state.operator) {
            if (currValue === '.' && !state.n2.includes('.')) {
                stateFilling(currValue)
                return  Render();
            }
            else {
                // math
                if(state.operator === "+"){
                    state.result = summ(Number(state.n1.join('')), Number(state.n2.join('')));
                }
                else if(state.operator === ""){

                }
                else if(state.operator === ""){

                }
                else if(state.operator === ""){

                }
                else if(state.operator === ""){

                }
                else{
                    state.result = Number(state.n1.join('')); // DELETE This!
                }

            }
        }
        else {
            if (currValue === '.' && !state.n1.includes('.')) {
                stateFilling(currValue)
            }
            else {
                state.operator = currValue;
            }
        }
    }
    else {
        if(state.result) clearState();
        stateFilling(currValue);
    }

    Render();
}
