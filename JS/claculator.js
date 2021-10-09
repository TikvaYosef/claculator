let num = document.getElementsByClassName("numbers")
let operator = document.getElementsByClassName("operators")
let firstNumber;
let oper;
let clearInput = false

function chooseAndPrintNumber() {
    for (let i = 0; i < num.length; i++) {
        num[i].onclick = () => {
            if (clearInput == true) {
                inp.value = ""
                clearInput = false
            }
            console.log(clearInput, firstNumber, oper)
            inp.value += num[i].innerText
        }
    }

    // console.log(num[i])
}
chooseAndPrintNumber()



function chooseAndPrintOperators() {
    for (let i = 0; i < operator.length; i++) {
        operator[i].onclick = () => {
            clearInput = true;
            firstNumber = Number(inp.value);
            oper = operator[i].innerText;
            console.log(clearInput, firstNumber, oper)

        }
    }
}



function Operator(num1, num2, operator) {

    switch (operator) {

        case '+':

            return num1 + num2;


        case '-':

            return num1 - num2;


        case '*':

            return num1 * num2;

        case '/':

            return num1 / num2;

    }
}


chooseAndPrintOperators()
let secendNumber;
operatorequal.onclick = () => {
    secendNumber = Number(inp.value)
    inp.value = Operator(firstNumber, secendNumber, oper)
    console.log(firstNumber, secendNumber, oper)
}

function ac() {
    Ac.onclick = () => {
        inp.value = ""
    }

}
ac()







