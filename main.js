let current = document.getElementById("current")
let history = document.getElementById("history")
let firstInput = "0";
let secondInput = 0;
let operatorInput = 0;
let result = 0;
let number =["0","1","2","3","4","5","6","7","8","9","decimal"]
let operator =["add", "minus", "multiply", "divide"]

const buttons = document.querySelectorAll(".button")


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', calculate)
}

function calculate(button) {
    let input = button.target.id;
    if (input==="add" || input==="minus" || input==="multiply" || input==="divide") {
        if (operatorInput === 0) {
            operatorInput = input;
            history.innerText = firstInput // convert operatorInput to the icon when printed to history.innertext
            current.innerText = "0";
        } else {
            if (operatorInput === "add") {
                result = parseFloat(firstInput) + parseFloat(secondInput);
            } else if (operatorInput === "multiply") {
                result = parseFloat(firstInput) * parseFloat(secondInput);
            } else if (operatorInput === "divide") {
                result = parseFloat(firstInput) / parseFloat(secondInput);
            } else if (operatorInput === "minus") {
                result = parseFloat(firstInput) - parseFloat(secondInput);
            }
            history.innerText = history.innerText.concat(' ').concat(button.target.innerText).concat(' ').concat(secondInput);
            history.innerText = history.innerText.replace(' 0 ', '');
            current.innerText = result;
            firstInput = result.toString();
            secondInput = "0";
            operatorInput = input;
        }

        // if (current.innerText != "0") {
            
        // }
        // use endswith() to check if the last digit is "." if so append 2x0's
    }

    if (input === "decimal") {
        if (history.innerText ==="0") {    
            for (let i=0; i<firstInput.length; i++) {
                if (firstInput[i] === "\.") {
                return;
                }   
            }
            firstInput = firstInput.concat("\.");
            current.innerText = firstInput; 
        }
        else {
            for (let i=0; i<secondInput.length; i++) {
                if (secondInput[i] === "\.") {
                return;
                }   
            }
            secondInput = secondInput.concat("\.");
            current.innerText = secondInput; 
        }
    }

    if (input === "clear") {
        firstInput = "0";
        secondInput = "0";
        operatorInput = 0;
        current.innerText = "0";
        history.innerText = "0";
    }
    
    if (input === "delete") {
        if (current.innerText === "0") {
            return;
        }
        if (history.innerText === "0") { //check which input is current
            firstInput = firstInput.slice(0,-1);
            if (firstInput === '') {
                firstInput = "0";
            }
            current.innerText = firstInput;
        }
        else {
            secondInput = secondInput.slice(0,-1);
            if (secondInput === '') {
                secondInput = "0";
            }
            current.innerText = secondInput;
        }
        //remove the last digit
    }

    if (input in number) {
        if (history.innerText === "0") {
            firstInput = firstInput+input;
            if (firstInput[0] === "0") {
                firstInput = firstInput.slice(1);
            }
            current.innerText = firstInput;
        }
        else {
            secondInput = secondInput+input;
            if (secondInput[0] === "0") {
                secondInput = secondInput.slice(1);
            }
            current.innerText = secondInput;
        }
    }

    if (input === "equals") {
        if (operatorInput === "add") {
            result = parseFloat(firstInput) + parseFloat(secondInput);
        } else if (operatorInput === "multiply") {
            result = parseFloat(firstInput) * parseFloat(secondInput);
        } else if (operatorInput === "divide") {
            result = parseFloat(firstInput) / parseFloat(secondInput);
        } else if (operatorInput === "minus") {
            result = parseFloat(firstInput) - parseFloat(secondInput);
        }
        history.innerText = history.innerText.concat(' ').concat(secondInput);
        current.innerText = result;
        firstInput = result.toString();
        secondInput = "0";
        operatorInput = 0;
    }

}