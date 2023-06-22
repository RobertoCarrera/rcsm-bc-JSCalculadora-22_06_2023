

const addNumber = (num) => {

    digit = num;
    let updateScreen = document.getElementById("screen");
    updateScreen.textContent = digit;
}

const cleanCalculator = () => {

    let updateScreen = document.getElementById("screen");
    updateScreen.textContent = "0";
}

const addOperator = (op) => {

    let updateScreen = document.getElementById("screen");
    updateScreen.textContent = op;
}