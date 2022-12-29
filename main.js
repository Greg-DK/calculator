let current = document.getElementById("current")
let history = document.getElementById("history")
let firstInput = 0;
let secondInput = 0;
let operatorInput = 0;

const buttons = document.querySelectorAll(".button")

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', calculate)
}

function calculate(button) {
    let input = button.target.id;
    if (input = operator) {
        current = 0;
        history = firstInput;
    }

    if (input = number) {
        if (history = 0) {
            firstInput += input;
            current = firstInput;
            //add a display to screen
        }
        else {
            secondInput += input;
            current = secondInput;
            //add a display to screen
        }
    }

    // if (input = equals) {
    //     current = firstInput Math(operator) secondInput; //fix logic for maths
    //     //add a display to screen
    // }
    current.innerText = input; // does this still make sense?

}