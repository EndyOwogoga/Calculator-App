//CALCULATOR PROGRAM

const display = document.querySelector(".display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax Error";
    }

}
