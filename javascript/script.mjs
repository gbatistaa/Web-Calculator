import { zero, one, two, three, four, five, six, seven, eight, nine } from "./domModule.mjs";
import { result, resultBtn, minus, plus, divider, multi, resetBtn, point, del } from "./domModule.mjs";

// Adicionando eventos de clique em todos os botões, e evento de enter na Window (para mostrar o resultado):
let arrayOperator = [];
let multDivArr = [];
let standBy = undefined;
let currentResult = undefined;
let operationCode = undefined;
let errorCode = false;
let resultOnScreen = false;

//Função auxiliar de operações, evitando erro de apenas respeitar o próximo comando:

const operationFunc = (a) => (b) => {
    switch (operationCode) {
        case 0:
            return a - b
        case 1:
            return a + b
        case 2:
            return a / b
        case 3:
            return a * b
    };
};

// Função recursiva para auxiliar nas operações com stand by:

const multiDivAll = (array, opCode) => {
    if (typeof array == "object"){
        if (opCode === 3) {
            return array.reduce((total, value) => total * value, 1)
        } else {
            return array.reduce((total, value) => total / value, 1)
        };
    }
};

const addDigit = (digit) => {
    if (errorCode === false) {
        if (result.innerText.length !== 0 && currentResult !== undefined && resultOnScreen === true) {
            result.replaceChildren("");
            resultOnScreen = false;
        } if (result.innerText.length <= 12) {
            const nodeNumber = document.createTextNode(digit);
            result.appendChild(nodeNumber);
        };
    };
};

zero.addEventListener("click", (e) => addDigit(zero.value));
one.addEventListener("click", (e) => addDigit(one.value));
two.addEventListener("click", (e) => addDigit(two.value));
three.addEventListener("click", (e) => addDigit(three.value));
four.addEventListener("click", (e) => addDigit(four.value));
five.addEventListener("click", (e) => addDigit(five.value));
six.addEventListener("click", (e) => addDigit(six.value));
seven.addEventListener("click", (e) => addDigit(seven.value));
eight.addEventListener("click", (e) => addDigit(eight.value));
nine.addEventListener("click", (e) => addDigit(nine.value));

del.addEventListener("click", (e) => {
    if(errorCode === false) result.replaceChildren("");
    else if(result.hasChildNodes) result.removeChild(result.lastChild);
});
minus.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        operationCode = 0;
        console.log(operationCode)
        currentResult = parseFloat(result.innerText);
        console.log(currentResult);
        arrayOperator.push(parseFloat(result.innerText));
        console.log(arrayOperator);
        result.replaceChildren("");
        if (isNaN(arrayOperator[0])) {
            errorCode = true;
            result.replaceChildren("");
            const error = "Error";
            error.split("").forEach((value) => {
                let letterNode = document.createTextNode(value);
                result.appendChild(letterNode);
            });
        }
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            console.log(operationCode)
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                console.log(arrayOperator);
                result.replaceChildren("");
                if (operationCode === 0 || operationCode === 1) {
                    currentResult = operationFunc(arrayOperator[0])(arrayOperator[1]);
                } else {
                    currentResult -= operationFunc(arrayOperator[0])(arrayOperator[1]);
                }
                if (currentResult.toString().length < 13) {
                    var resultString = currentResult.toString()
                } else {
                    var resultString = currentResult.toExponential(2).toString()
                }
                resultString.split("").forEach((value) => {
                    let resultText = document.createTextNode(value);
                    result.appendChild(resultText);
                });
                arrayOperator[0] = currentResult;
                console.log(arrayOperator);
                arrayOperator.pop();
                console.log(arrayOperator);
                console.log(currentResult);
                operationCode = 0;
                resultOnScreen = true;
            } else {
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            };
        } else {
            operationCode = 1;
            result.replaceChildren("");
        };
    };
});
plus.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        console.log(operationCode)
        currentResult = parseFloat(result.innerText);
        console.log(currentResult);
        arrayOperator.push(parseFloat(result.innerText));
        console.log(arrayOperator);
        result.replaceChildren("");
        operationCode = 1;
        if (isNaN(arrayOperator[0])) {
            errorCode = true;
            result.replaceChildren("");
            const error = "Error";
            error.split("").forEach((value) => {
                let letterNode = document.createTextNode(value);
                result.appendChild(letterNode);
            });
        }
    } else if(arrayOperator.length >= 1) {
        if (operationCode !== 4) {
            console.log(operationCode)
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                console.log(arrayOperator);
                console.log(currentResult)
                result.replaceChildren("");
                if (operationCode === 0 || operationCode === 1) {
                    currentResult = operationFunc(arrayOperator[0])(arrayOperator[1]);
                    arrayOperator[0] = currentResult;
                    arrayOperator.pop();
                } else {
                    console.log(operationCode);
                    console.log(currentResult);
                    currentResult += multiDivAll(arrayOperator, operationCode);
                    arrayOperator = [currentResult];
                    console.log(multiDivAll(arrayOperator, operationCode));
                    console.log(currentResult);
                }
                if (currentResult.toString().length < 13) {
                    var resultString = currentResult.toString();
                } else {
                    var resultString = currentResult.toExponential(7).toString()
                }
                resultString.split("").forEach((value) => {
                    let resultText = document.createTextNode(value);
                    result.appendChild(resultText);
                });
                console.log(arrayOperator);
                console.log(arrayOperator);
                console.log(currentResult);
                operationCode = 1;
                resultOnScreen = true;
            } else {
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
                console.log(errorCode);
                console.log(arrayOperator);
                console.log(currentResult)
            };
        } else {
            operationCode = 1;
            result.replaceChildren("");
        };
    };
});
divider.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        arrayOperator.push(parseFloat(result.innerText));
        console.log(arrayOperator[0]);
        result.replaceChildren("");
        if (isNaN(arrayOperator[0])) {
            errorCode = true;
            result.replaceChildren("");
            const error = "Error";
            error.split("").forEach((value) => {
                let letterNode = document.createTextNode(value);
                result.appendChild(letterNode);
            });
        }
        operationCode = 3;
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                if (operationCode === 2 || operationCode === 3) {
                    arrayOperator.push(parseFloat(result.innerText));
                    result.replaceChildren("");
                    currentResult = operationFunc(arrayOperator[0])(arrayOperator[1]);
                    if (currentResult.toString().length < 13) {
                        var resultString = currentResult.toString()
                    } else {
                        var resultString = currentResult.toExponential(7).toString();
                    }
                    resultString.split("").forEach((value) => {
                        let resultText = document.createTextNode(value);
                        result.appendChild(resultText);
                    });
                    arrayOperator[0] = currentResult;
                    console.log(arrayOperator);
                    arrayOperator.pop();
                    console.log(arrayOperator);
                    console.log(currentResult);
                    operationCode = 2;
                    resultOnScreen = true;
                } else {
                    console.log(arrayOperator)
                    arrayOperator.shift();
                    console.log(arrayOperator)
                    arrayOperator.push(parseFloat(result.innerText));
                    result.replaceChildren("");
                    console.log(arrayOperator);
                    operationCode = 2;
                    resultOnScreen = true;
                };
            } else {
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            };
        } else {
            operationCode = 3;
            result.replaceChildren("");
        };
    };
});
multi.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        arrayOperator.push(parseFloat(result.innerText));
        console.log(arrayOperator[0]);
        result.replaceChildren("");
        if (isNaN(arrayOperator[0])) {
            errorCode = true;
            result.replaceChildren("");
            const error = "Error";
            error.split("").forEach((value) => {
                let letterNode = document.createTextNode(value);
                result.appendChild(letterNode);
            });
        }
        operationCode = 3;
    } else if(arrayOperator.length >= 1) {
        if (operationCode !== 4) {
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                if (operationCode >= 2) {
                    arrayOperator.push(parseFloat(result.innerText));
                    console.log(arrayOperator)
                    result.replaceChildren("");
                    if (standBy === undefined) {
                        arrayOperator.push(parseFloat(result.innerText));
                        result.replaceChildren("");
                        currentResult = operationFunc(arrayOperator[0])(arrayOperator[1]);
                        arrayOperator[0] = currentResult;
                        arrayOperator.pop();
                    } else {
                        // console.log(parseFloat(result.innerText))
                        // arrayOperator.push(parseFloat(result.innerText));
                        // result.replaceChildren("");
                    }
                    if (currentResult.toString().length < 13) {
                        var resultString = currentResult.toString()
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    } else {
                        var resultString = currentResult.toExponential(7).toString();
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    }
                    console.log(arrayOperator);
                    console.log(arrayOperator);
                    console.log(currentResult);
                    operationCode = 3;
                    resultOnScreen = true;
                } else {
                    console.log(arrayOperator);
                    standBy = arrayOperator[0];
                    console.log(currentResult);
                    console.log(standBy);
                    arrayOperator.shift();
                    console.log(arrayOperator)
                    arrayOperator.push(parseFloat(result.innerText));
                    result.replaceChildren("");
                    console.log(arrayOperator);
                    operationCode = 3;
                    resultOnScreen = true;
                };
            } else {
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            };
        } else {
            operationCode = 3;
            result.replaceChildren("");
        };
    };
});
point.addEventListener("click", (e) => {
    if (result.innerText.length <= 13 && result.innerText.length > 0 && !result.innerText.includes('.') ) {
        const pointValue = point.value;
        const nodeNumber = document.createTextNode(pointValue);
        result.appendChild(nodeNumber);
    }
});
resultBtn.addEventListener("click", (e) => {
    resultOnScreen = true;
    switch (operationCode) {
        case 0:
            operationCode = 4;
            if (isNaN(arrayOperator[0])){
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            } else if (arrayOperator.length > 0) {
                arrayOperator.push(parseFloat(result.innerText));
                if (isNaN(arrayOperator[1])){
                    errorCode = true;
                    result.replaceChildren("");
                    const error = "Error";
                    error.split("").forEach((value) => {
                        let letterNode = document.createTextNode(value);
                        result.appendChild(letterNode);
                    });
                } else {
                    result.replaceChildren("");
                    currentResult = arrayOperator[0] - arrayOperator[1];
                    arrayOperator[0] = currentResult;
                    arrayOperator.pop();
                    let resultString = currentResult.toString().split("");
                    resultString.forEach((value) => {
                        let resultText = document.createTextNode(value);
                        result.appendChild(resultText)
                    });
                }
            };

            break

        case 1:
            operationCode = 4;
            if (isNaN(arrayOperator[0])){
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            } else if (arrayOperator.length > 0) {
                arrayOperator.push(parseFloat(result.innerText));
                if (isNaN(arrayOperator[1])){
                    errorCode = true;
                    result.replaceChildren("");
                    const error = "Error";
                    error.split("").forEach((value) => {
                        let letterNode = document.createTextNode(value);
                        result.appendChild(letterNode);
                    });
                } else {
                    result.replaceChildren("");
                    currentResult = arrayOperator[0] + arrayOperator[1];
                    if (currentResult.toString().length < 13) {
                        const resultString = currentResult.toString();
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    } else {
                        const resultString = currentResult.toExponential(7).toString();
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    }
                    arrayOperator[0] = currentResult;
                    arrayOperator.pop();
                }
            };

            break

        case 2:

        operationCode = 4;
        if (isNaN(arrayOperator[0])){
            errorCode = true;
            result.replaceChildren("");
            const error = "Error";
            error.split("").forEach((value) => {
                let letterNode = document.createTextNode(value);
                result.appendChild(letterNode);
            });
        } else if (arrayOperator.length > 0) {
            arrayOperator.push(parseFloat(result.innerText));
            if (isNaN(arrayOperator[1])){
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            } else {
                result.replaceChildren("");
                currentResult = arrayOperator[0] / arrayOperator[1];
                if (currentResult.toString().length < 13) {
                    const resultString = currentResult.toString();
                    resultString.split("").forEach((value) => {
                        let resultText = document.createTextNode(value);
                        result.appendChild(resultText);
                    });
                } else {
                    const resultString = currentResult.toExponential(7).toString();
                    resultString.split("").forEach((value) => {
                        let resultText = document.createTextNode(value);
                        result.appendChild(resultText);
                    });
                }
                arrayOperator[0] = currentResult;
                arrayOperator.pop();
            }
        };

            break

        case 3:
            operationCode = 4;
            if (isNaN(arrayOperator[0])){
                errorCode = true;
                result.replaceChildren("");
                const error = "Error";
                error.split("").forEach((value) => {
                    let letterNode = document.createTextNode(value);
                    result.appendChild(letterNode);
                });
            } else if (arrayOperator.length > 0) {
                arrayOperator.push(parseFloat(result.innerText));
                if (isNaN(arrayOperator[1])){
                    errorCode = true;
                    result.replaceChildren("");
                    const error = "Error";
                    error.split("").forEach((value) => {
                        let letterNode = document.createTextNode(value);
                        result.appendChild(letterNode);
                    });
                } else {
                    result.replaceChildren("");
                    currentResult = arrayOperator[0] * arrayOperator[1];
                    if (currentResult.toString().length < 13) {
                        const resultString = currentResult.toString();
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    } else {
                        const resultString = currentResult.toExponential(7).toString();
                        resultString.split("").forEach((value) => {
                            let resultText = document.createTextNode(value);
                            result.appendChild(resultText);
                        });
                    }
                    arrayOperator[0] = currentResult;
                    arrayOperator.pop();
                }
            };

            break

    };
});
resetBtn.addEventListener("click", (e) => {
    currentResult = undefined;
    arrayOperator = [];
    operationCode = undefined;
    errorCode = false;
    resultOnScreen = false;
    result.replaceChildren("");
});