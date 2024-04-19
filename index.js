const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const resultElement = document.getElementById('result');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')

let action = '+'


multiplicationBtn.onclick = function() {
    action = '*'
}

divisionBtn.onclick = function() {
    action = '/'
}

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

function printResult(result) {
    if(result < 0 ){
        resultElement.style.color = 'red';
    }else{
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
   const num1 = Number(inp1.value)
   const num2 = Number(inp2.value)

   if(actionSymbol === '+'){
    return num1 + num2
   }
    else if(actionSymbol === '-'){
    return num1 - num2
   }
    else if(actionSymbol === '*'){
    return num1 * num2
   } 
   else{
    return num1 / num2
   }
}

submitBtn.onclick = function() {

    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if(action === '+'){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // }else if(action === '-'){
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }else if(action === '*'){
    //     const sum = Number(input1.value) * Number(input2.value)
    //     printResult(sum)
    // }else{
    //     const sum = Number(input1.value) / Number(input2.value)
    //     printResult(sum)
    //  }
}