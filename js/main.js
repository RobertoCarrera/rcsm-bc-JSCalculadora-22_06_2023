
const calculator = (buttonPressed) => {

    let value = buttonPressed;
    let screen = document.getElementById("screen");

    if (screen.textContent === "0") {
        
        screen.textContent = value;
    }else{

        if (value === "=") {

            console.log(screen.textContent);
            let total = eval((screen.textContent));
            screen.textContent = total;
        }else{

            if (value === "C"){

                screen.textContent = "0";
            }else{
                screen.textContent += value;
        }
    }
    }


}