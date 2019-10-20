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
    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);

    }
    compute() {

    }
    chooseOperation(operation) {

    }
    appendNumber(number ) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    updateResult() {
        this.currentInput.innerText = this.currentOperand;

    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const equalBtn = document.querySelector('[data-equal]');
const operationBtn = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const previousInput = document.querySelector('[data-previous-operand]');
const currentInput = document.querySelector('[data-current-operand]');

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

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateResult();
});

equalBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateResult();
});
