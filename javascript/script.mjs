import { zero, one, two, three, four, five, six, seven, eight, nine } from "./domModule.mjs";
import { result, resultBtn, minus, plus, divider, multi, resetBtn, point, del } from "./domModule.mjs";

// Adicionando eventos de clique em todos os botões, e evento de enter na Window (para mostrar o resultado):
let currentResult = undefined;
let arrayOperator = [];
let operationCode = undefined;
let opNumber = 0;
let errorCode = false

const removeAllChilds = (span) => {
    const childNodes = span.childNodes;
  
    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes[i].nodeType === Node.TEXT_NODE) {
        span.removeChild(childNodes[i]);
      }
    }
}

zero.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const zeroValue = String(zero.value);
        const nodeNumber = document.createTextNode(zeroValue);
        result.appendChild(nodeNumber);
    }
});
one.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const oneValue = one.value;
        const nodeNumber = document.createTextNode(oneValue);
        result.appendChild(nodeNumber);
    }
});
two.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const twoValue = two.value;
        const nodeNumber = document.createTextNode(twoValue);
        result.appendChild(nodeNumber);
    }
});
three.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const threeValue = three.value;
        const nodeNumber = document.createTextNode(threeValue);
        result.appendChild(nodeNumber);
    }
});
four.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const fourValue = four.value;
        const nodeNumber = document.createTextNode(fourValue);
        result.appendChild(nodeNumber);
    }
});
five.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const fiveValue = five.value;
        let nodeNumber = document.createTextNode(fiveValue);
        result.appendChild(nodeNumber);
    }
});
six.addEventListener("click", (e) => {
    if(errorCode !== true){
        if (result.innerText !== 0 && currentResult !== undefined) {
            result.replaceChildren("");
        } if (result.innerText.length <= 12) {
            const sixValue = six.value;
            const nodeNumber = document.createTextNode(sixValue);
            result.appendChild(nodeNumber);
        };
    };
});
seven.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const sevenValue = seven.value;
        const nodeNumber = document.createTextNode(sevenValue);
        result.appendChild(nodeNumber);
    };
});
eight.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const eightValue = eight.value;
        const nodeNumber = document.createTextNode(eightValue);
        result.appendChild(nodeNumber);
    };
});
nine.addEventListener("click", (e) => {
    if (result.innerText.length <= 12) {
        const nineValue = nine.value;
        const nodeNumber = document.createTextNode(nineValue);
        result.appendChild(nodeNumber);
    };
});
del.addEventListener("click", (e) => {
    if(errorCode === false) result.replaceChildren("");
    else if(result.hasChildNodes) result.removeChild(result.lastChild);
});
minus.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        operationCode = 0;
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
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            operationCode = 0;
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                result.replaceChildren("");
                currentResult = arrayOperator[0] - arrayOperator[1];
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
            operationCode = 0;
            result.replaceChildren("");
        };
    };
});
plus.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        operationCode = 1;
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
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            operationCode = 1;
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                result.replaceChildren("");
                currentResult = arrayOperator[0] + arrayOperator[1];
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
        operationCode = 2;
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
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            operationCode = 2;
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                result.replaceChildren("");
                currentResult = arrayOperator[0] / arrayOperator[1];
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
            operationCode = 2;
            result.replaceChildren("");
        };
    };
});
multi.addEventListener("click", (e) => {
    if (arrayOperator.length === 0){
        operationCode = 3;
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
    } else if(arrayOperator.length === 1) {
        if (operationCode !== 4) {
            operationCode = 3;
            if (isNaN(arrayOperator[0]) === false && result.innerText.length !== 0 && errorCode === false) {
                errorCode = false;
                console.log(arrayOperator);
                arrayOperator.push(parseFloat(result.innerText));
                result.replaceChildren("");
                currentResult = arrayOperator[0] * arrayOperator[1];
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
            if (arrayOperator[0] == NaN){
                let errorNode = document.createTextNode("Error");
                result. appendChild(errorNode);
            } else if (arrayOperator.length > 0) {
                arrayOperator.push(parseFloat(result.innerText))
                result.replaceChildren("");
                currentResult = arrayOperator[0] + arrayOperator[1];
                arrayOperator[0] = currentResult;
                arrayOperator.pop();
                let resultString = currentResult.toString().split("");
                resultString.forEach((value) => {
                    let resultText = document.createTextNode(value);
                    result.appendChild(resultText);
                });
            };

            break

        case 2:

            operationCode = 4;
            if(arrayOperator[0] == NaN){
                let errorNode = document.createTextNode("Error");
                result.appendChild(errorNode);
            }
            else if (arrayOperator.length > 0) {
                arrayOperator.push(parseFloat(result.innerText));
                result.replaceChildren("");
                currentResult = arrayOperator[0] / arrayOperator[1];
                arrayOperator[0] = currentResult;
                arrayOperator.pop();
                let resultString = currentResult.toString().split("")
                resultString.forEach((value) => {
                    let resultText = document.createTextNode(value);
                    result.appendChild(resultText)
                });
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
    opNumber = 0;
    errorCode = false;
    result.replaceChildren("");
});
