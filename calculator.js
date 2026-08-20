let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let firstNumber = null;
let operator = null;
let newNumber = true;


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.innerText;


        // Numbers

        if (
            (value >= "0" && value <= "9") ||
            value === "00"
        ) {

            if (
                newNumber ||
                input.value === "0" ||
                input.value === "Error"
            ) {

                input.value = value;

                newNumber = false;

            } else {

                input.value += value;

            }

        }


        // Decimal

        else if (value === ".") {

            if (
                newNumber ||
                input.value === "Error"
            ) {

                input.value = "0.";

                newNumber = false;

            }

            else if (!input.value.includes(".")) {

                input.value += ".";

            }

        }


        // Operators

        else if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/"
        ) {

            firstNumber = Number(input.value);

            operator = value;

            newNumber = true;

        }


        // Equal

        else if (value === "=") {

            calculate();

        }


        // AC

        else if (value === "AC") {

            input.value = "0";

            firstNumber = null;

            operator = null;

            newNumber = true;

        }


        // DEL

        else if (value === "DEL") {

            if (
                input.value.length <= 1 ||
                input.value === "Error"
            ) {

                input.value = "0";

            } else {

                input.value =
                    input.value.slice(0, -1);

            }

        }


        // Percentage

        else if (value === "%") {

            if (input.value !== "Error") {

                input.value =
                    Number(input.value) / 100;

            }

        }

    });

});


// Calculate Function

function calculate() {

    if (
        firstNumber === null ||
        operator === null ||
        input.value === "Error"
    ) {

        return;

    }


    let secondNumber =
        Number(input.value);

    let result;


    if (operator === "+") {

        result =
            firstNumber + secondNumber;

    }

    else if (operator === "-") {

        result =
            firstNumber - secondNumber;

    }

    else if (operator === "*") {

        result =
            firstNumber * secondNumber;

    }

    else if (operator === "/") {

        if (secondNumber === 0) {

            input.value = "Error";

            firstNumber = null;

            operator = null;

            newNumber = true;

            return;

        }

        result =
            firstNumber / secondNumber;

    }


    input.value =
        Number(result.toFixed(10));

    firstNumber = null;

    operator = null;

    newNumber = true;

}