const previousInput = document.querySelector('[data-previous-operand]');
const currentInput = document.querySelector('[data-current-operand]');
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalBtn = document.querySelector('[data-equal]');


class Calculator {
    constructor(previousInput, currentInput) {
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    delete() {
     this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    equal() {
        this.currentOperand = this.currentOperand;

    }
    
    chooseOperation(operation) {

    }   

    updateResult() {
        this.currentInput.innerText = this.currentOperand;

    }

}

const calculator = new Calculator(previousInput, currentInput);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateResult();
    });
});

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateResult();
        
    });
});

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateResult();
});

equalBtn.addEventListener('click', () => {
    calculator.equal();
    calculator.updateResult();
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateResult();
})