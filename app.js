let display=document.getElementById('display');
let first_operand='';
let Operator='';
let current_input='';
let second_operand='';
let result='';

function appendDisplay(input) {
   
    current_input+=input;
    display.value=current_input;
}
function clearDisplay() {
    current_input='';
    Operator='';
    display.value='';
}

function appendOperator(op) {
    if (current_input==='') return;
    else if(first_operand!=0)
    {
        operateResult();
    }
    first_operand=current_input;
    Operator=op;
    current_input='';
}
function operateResult() {
   
    if (first_operand===0) return;
    second_operand=current_input;
   
    
    switch (Operator) {
        case '+':
            result=parseFloat(first_operand)+parseFloat(second_operand);
            break;
        case '-':
                result=parseFloat(first_operand)-parseFloat(second_operand);
                break;
         case '*':
            result=parseFloat(first_operand)*parseFloat(second_operand);
            break;
        case '/':
            result=parseFloat(first_operand)/parseFloat(second_operand);
            break;

        default:
            break;
    }
    display.value=result;
    current_input=result;
    Operator='';
    first_operand='';
  
}