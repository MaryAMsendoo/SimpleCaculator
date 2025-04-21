
let myinput_value = document.getElementById("input_value");

function appendnumber(input) {
    myinput_value.value += input;
}

function appendClear() {
    myinput_value.value = "";
}

function backspace() {
    myinput_value.value = myinput_value.value.slice(0, -1);
}

function calculate() {
    try {
        if (myinput_value.value.includes("sin")) {
            myinput_value.value = Math.sin(eval(myinput_value.value.replace("sin", "")));
        } else if (myinput_value.value.includes("cos")) {
            myinput_value.value = Math.cos(eval(myinput_value.value.replace("cos", "")));
        } else if (myinput_value.value.includes("tan")) {
            myinput_value.value = Math.tan(eval(myinput_value.value.replace("tan", "")));
        } else if (myinput_value.value.includes("√")) {
            myinput_value.value = Math.sqrt(eval(myinput_value.value.replace("√", "")));
        } else {
            myinput_value.value = eval(myinput_value.value);
        }
    } catch {
        myinput_value.value = "Error";
    }
}