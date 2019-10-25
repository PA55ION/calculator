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
        let computation;
        let previous = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        if(isNaN(previous) || isNaN(current)) return;

        switch(this.operation) {
            case "+":
                computation = previous + current;
                break;
                case "-":
                computation = previous - current;
                break;
                case "x":
                    computation = previous * current;
                    break;
                    case "÷":
                    computation = previous / current;
                    break;
                    default:
                        return;
        }
        this.currentOperand = computation
        this.operation = undefined;
        this.previousOperand = '';
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.previousOperand === '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    appendNumber(number ) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    getNumber(number) {
        const stringNumber = number.toString();
        const integerDigit = parseFloat(stringNumber.split('.')[0]);
        const decimalDigit = stringNumber.split('.')[1];
        let displayInteger;
        if(isNaN(integerDigit)) {
            displayInteger = '';
        } else {
            displayInteger = integerDigit.toLocaleString('en-US', {maximumFractionDigits: 0});
        }

        if(decimalDigit != null) {
            return `${integerDigit}.${decimalDigit}`
        } else {
            return displayInteger;

        }
    }

    updateResult() {
        this.currentInput.innerText = this.getNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousInput.innerText = `${this.getNumber(this.previousOperand)} ${this.operation}`;
        }
          
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
