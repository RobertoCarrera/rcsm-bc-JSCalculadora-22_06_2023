
const calculator = (buttonPressed) => {

    let value = buttonPressed;
    let screen = document.getElementById("screen");
    let operatorCounter = 0;

    if (screen.textContent === "0") {
        
        screen.textContent = value;
    }else{

        switch (value) {
            case "1":
                screen.textContent += value;
                operatorCounter = 0;

                break;
            case "2":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "3":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "+":
                if (operatorCounter === 0) {
                    
                    screen.textContent += value;
                    operatorCounter++;
                }
                
                break;
            case "4":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "5":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "6":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "-":
                if (operatorCounter === 0) {
                    
                    screen.textContent += value;
                    operatorCounter++;
                }
                break;
            case "7":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "8":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "9":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case "*":
                if (operatorCounter === 0) {
                    
                    screen.textContent += value;
                    operatorCounter++;
                }
                break;
            case "0":
                screen.textContent += value;
                operatorCounter = 0;
                
                break;
            case ".":
                if (operatorCounter === 0) {
                    
                    screen.textContent += value;
                    operatorCounter++;
                }
                break;
            case "C":
                
                screen.textContent = 0;
                break;
            case "=":
                
                let total = eval(screen.textContent);

                screen.textContent = total;
                break;
            default:
                break;
        }
    }
}