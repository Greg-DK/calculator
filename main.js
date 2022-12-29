let current = document.getElementById("current")
let history = document.getElementById("history")
let firstInput = "0";
let secondInput = 0;
let operatorInput = 0;
let number =["0","1","2","3","4","5","6","7","8","9","decimal"]
let operator =["add", "minus", "multiply", "divide"]

const buttons = document.querySelectorAll(".button")


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', calculate)
}

function calculate(button) {
    let input = button.target.id;
    console.log(input)
    if (input==="add" || input==="minus" || input==="multiply" || input==="divide") {
        // current = 0;
        operatorInput = input;
        history.innerText = firstInput + ' ' + operatorInput; // convert operatorInput to the icon when printed to history.innertext
        current.innerText = "0";
        console.log(operatorInput)
        // use endswith() to check if the last digit is "." if so append 2x0's
    }

    if (input === "decimal") {
        for (let i=0; i<firstInput.length; i++) {
            if (firstInput[i] === "\.") {
            return;
            }   
        }
        firstInput = firstInput.concat("\.");
        current.innerText = firstInput; 
    }

    if (input === "clear") {
        firstInput = "0";
        secondInput = "0";
        operatorInput = "0";
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
        //remove the last digit
    }

    if (input in number) {
        if (history.innerText === "0") {
            firstInput = firstInput+input;
            if (firstInput[0] === "0") {
                firstInput = firstInput.slice(1);
            }
            console.log(firstInput)
            current.innerText = firstInput;
            //add a display to screen
        }
        // else {
        //     secondInput += input;
        //     current = secondInput;
            //add a display to screen
        // }
    }

    // if (input = equals) {
    //     current = firstInput Math(operator) secondInput; //fix logic for maths
    //     //add a display to screen
    // }

}