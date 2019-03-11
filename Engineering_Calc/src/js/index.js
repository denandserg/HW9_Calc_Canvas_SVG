window.addEventListener('load', () => {
    init(document.getElementById('cont'));
});

function init(cont) {
    let strDiv = '<div class="calc"> <div class="calc-display"> <label id="memory" class="calc-display__memory">Memory operation</label> <input id="userInput" class="calc-display__text" type="text" value="0" readonly> </div> <div id="calcNumpad" class="calc-numpad"> <div class="calc-numpad-row"> <button id="rad" class="calc-numpad-row__button" data-flag="off" value="Rad">Rad</button> <button id="deg" class="calc-numpad-row__button" data-flag="on" value="Deg">Deg</button> <button id="factorial" class="calc-numpad-row__button" value="x!">x!</button> <button id="brLeft" class="calc-numpad-row__button" value="(">(</button> <button id="brRight" class="calc-numpad-row__button" value=")">)</button> <button id="percent" class="calc-numpad-row__button" value="%">%</button> <button id="ce" class="calc-numpad-row__button" value="CE">CE</button> </div> <div class="calc-numpad-row"> <button id="inv" class="calc-numpad-row__button" data-flag="">Inv</button> <button id="sin" class="calc-numpad-row__button" value="sin">sin</button> <button id="ln" class="calc-numpad-row__button" value="ln">ln</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="7">7</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="8">8</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="9">9</button> <button class="calc-numpad-row__button calc-numpad-row__button--operationButton" value="/">&#xF7</button> </div> <div class="calc-numpad-row"> <button id="pi" class="calc-numpad-row__button" value="Pi">&#x3C0</button> <button id="cos" class="calc-numpad-row__button" value="Cos">cos</button> <button id="log" class="calc-numpad-row__button" value="log">log</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="4">4</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="5">5</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="6">6</button> <button class="calc-numpad-row__button calc-numpad-row__button--operationButton" value="*">&#xD7</button> </div> <div class="calc-numpad-row"> <button id="e" class="calc-numpad-row__button" value="e">e</button> <button id="tan" class="calc-numpad-row__button" value="Tan">tan</button> <button id="sqrt" class="calc-numpad-row__button" value="sqrt" data-flag="sqrt">&#8730</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="1">1</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="2">2</button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="3">3</button> <button class="calc-numpad-row__button calc-numpad-row__button--operationButton" value="-">-</button> </div> <div class="calc-numpad-row"> <button id="mod" class="calc-numpad-row__button" value="Mod">Mod</button> <button id="exp" class="calc-numpad-row__button" value="Exp">EXP</button> <button id="xPowY" class="calc-numpad-row__button" value="xpowy" data-flag="XpowY">x<sup>y</sup></button> <button class="calc-numpad-row__button calc-numpad-row__button--number" value="0">0</button> <button id ="decimal" class="calc-numpad-row__button" value=".">.</button> <button id="result" class="calc-numpad-row__button calc-numpad-row__button--equally" value="="><b>=</b></button> <button class="calc-numpad-row__button calc-numpad-row__button--operationButton" value="+">+</button> </div> </div> </div>';

    cont.innerHTML = strDiv;

    let radBtn = document.getElementById('rad');
    let degBtn = document.getElementById('deg');
    let invBtn = document.getElementById('inv');
    let sinBtn = document.getElementById('sin');
    let lnBtn = document.getElementById('ln');
    let cosBtn = document.getElementById('cos');
    let logBtn = document.getElementById('log');
    let tanBtn = document.getElementById('tan');
    let sqrtBtn = document.getElementById('sqrt');
    let xPowYBtn = document.getElementById('xPowY');
    let numbersBtn = document.querySelectorAll('.calc-numpad-row__button--number');
    let operationsBtn = document.querySelectorAll('.calc-numpad-row__button--operationButton');
    let userInput = document.getElementById('userInput');
    let memoryInput = document.getElementById('memory');
    let ceBtn = document.getElementById('ce');
    let resultBtn = document.getElementById('result');
    let decimalBtn = document.getElementById('decimal');
    let piBtn = document.getElementById('pi');
    let eBtn = document.getElementById('e');
    let expBtn = document.getElementById('exp');
    let brRightBtn = document.getElementById('brRight');
    let brLeftBtn = document.getElementById('brLeft');
    let factorialBtn = document.getElementById('factorial');
    let modBtn = document.getElementById('mod');
    let percentBtn = document.getElementById('percent');
    let count = 1;
    let flag = true;
    let pointEntry = false;
    let curValFirst;
    let curValSecond;
    let percentFlag = false;

    percentBtn.addEventListener('click', () => {
        count++;
        userInput.value += '%';
        percentFlag = true;
    });

    decimalBtn.addEventListener('click', () => {
        if (userInput.value == '0') {
            checkNull(userInput.value);
        }
        userInput.value += decimalBtn.value;
    });

    resultBtn.addEventListener('click', () => {

        let curValue = userInput.value;
        memoryInput.innerHTML = curValue;
        count = 0;
        if (percentFlag) {
            percentFlag = false;
            let operands = curValue.split('%');
            userInput.value = (operands[0] / 100) * operands[1];
        } else {
            userInput.value = eval(curValue);
        }
    });

    modBtn.addEventListener('click', () => {
        userInput.value += '%';
        count++;
    });

    brLeftBtn.addEventListener('click', () => {
        checkNull(brLeftBtn.value);
        count++;
    });

    brRightBtn.addEventListener('click', () => {
        checkNull(brRightBtn.value);
        count++;
    });

    lnBtn.addEventListener('click', () => {
        if (lnBtn.innerHTML == 'ln') {
            userInput.value = Math.log(userInput.value);
            count = 0;
        } else {
            let curVal = +userInput.value;
            userInput.value = Math.pow(2.30258509299, curVal);
            count = 0;
        }
    });

    xPowYBtn.addEventListener('click', () => {

        if (!pointEntry) {
            curValFirst = +userInput.value;
            count = 0;
            pointEntry = true;
            xPowYBtn.style.border = '2px solid red';
        } else {
            if (xPowYBtn.dataset.flag == 'XpowY') {
                curValSecond = +userInput.value;
                userInput.value = Math.pow(curValFirst, curValSecond);
                xPowYBtn.style.border = '1px solid #b8b8b5';
                count = 0;
                pointEntry = false;

            } else {
                curValSecond = +userInput.value;
                userInput.value = Math.pow(curValFirst, 1 / curValSecond);
                count = 0;
                xPowYBtn.style.border = '1px solid #b8b8b5';
                pointEntry = false;
            }
        }
    });

    sqrtBtn.addEventListener('click', () => {
        if (sqrtBtn.dataset.flag == 'sqrt') {
            let curVal = +userInput.value;
            userInput.value = Math.sqrt(curVal);
            count = 0;
        } else {
            let curVal = +userInput.value;
            userInput.value = Math.pow(curVal, 2);
            count = 0;
        }
    });

    for (let i = 0; i < numbersBtn.length; i++) {
        let number = numbersBtn[i];
        number.addEventListener('click', () => {
            if (count == '0') {
                userInput.value = '0';
            }
            count++;
            checkNull(number.value);
        });
    }

    for (let i = 0; i < operationsBtn.length; i++) {
        let operation = operationsBtn[i];
        operation.addEventListener('click', () => {
            count++;
            checkNull(operation.value);
        });
    }

    expBtn.addEventListener('click', () => {
        let curVal = +userInput.value;
        userInput.value = Math.exp(curVal);
    });

    factorialBtn.addEventListener('click', () => {
        let value = +userInput.value;
        userInput.value = '0';
        count = 0;
        checkNull(getFactorial(value));
    });

    piBtn.addEventListener('click', () => {
        count = 0;
        checkNull(3.14159265359);
    });

    eBtn.addEventListener('click', () => {
        count = 0;
        checkNull(2.71828182846);
    });

    ceBtn.addEventListener('click', () => {
        if (userInput.value !== '0'){
            if (flag) {
                let chunk = userInput.value.slice(0, -1);
                userInput.value = chunk !== '' ? chunk : 0;
                flag = false;
            } else {
                userInput.value = '0';
                flag = true;
            }
        }
        count++;
    });

    radBtn.addEventListener('click', activeRad);

    degBtn.addEventListener('click', () => {
        radBtn.dataset.dataFlag = 'off';
        radBtn.setAttribute('class', 'calc-numpad-row__button');
        degBtn.dataset.dataFlag = 'on';
        degBtn.setAttribute('class', 'calc-numpad-row__button calc-numpad-row__button--switchOnRadDeg');
    });

    sinBtn.addEventListener('click', () => {
        if (sinBtn.innerHTML == 'sin') {
            if (radBtn.dataset.dataFlag == "on") {
                let resSin = Math.sin(+userInput.value);
                userInput.value = resSin;
                count = 0;
            } else {
                let resSin = Math.sin(+userInput.value * (Math.PI / 180));
                userInput.value = resSin;
                count = 0;
            }
        } else {
            if (radBtn.dataset.dataFlag == "on") {
                let resASin = Math.asin(+userInput.value);
                userInput.value = resASin;
                count = 0;
            } else {
                let resASin = Math.asin(+userInput.value * (Math.PI / 180));
                userInput.value = resASin;
                count = 0;
            }
        }
    });

    cosBtn.addEventListener('click', () => {
        if (cosBtn.innerHTML == 'cos') {
            if (radBtn.dataset.dataFlag == "on") {
                let resCos = Math.cos(+userInput.value);
                userInput.value = resCos;
                count = 0;
            } else {
                let resCos = Math.cos(+userInput.value * (Math.PI / 180));
                userInput.value = resCos;
                count = 0;
            }
        } else {
            if (radBtn.dataset.dataFlag == "on") {
                let resACos = Math.acos(+userInput.value);
                userInput.value = resACos;
                count = 0;
            } else {
                let resACos = Math.acos(+userInput.value * (Math.PI / 180));
                userInput.value = resACos;
                count = 0;
            }
        }
    });

    tanBtn.addEventListener('click', () => {
        if (tanBtn.innerHTML == 'tan') {
            if (radBtn.dataset.dataFlag == "on") {
                let resTan = Math.tan(+userInput.value);
                userInput.value = resTan;
                count = 0;
            } else {
                let resTan = Math.tan(+userInput.value * (Math.PI / 180));
                userInput.value = resTan;
                count = 0;
            }
        } else {
            if (radBtn.dataset.dataFlag == "on") {
                let resATan = Math.atan(+userInput.value);
                userInput.value = resATan;
                count = 0;
            } else {
                let resATan = Math.atan(+userInput.value * (Math.PI / 180));
                userInput.value = resATan;
                count = 0;
            }
        }
    });

    logBtn.addEventListener('click', () => {
        if (logBtn.innerHTML == 'log') {
            let curVal = +userInput.value;
            userInput.value = Math.log10(curVal);
            count = 0;
        } else {
            let curVal = userInput.value;
            userInput.value = Math.pow(10, curVal);
            count = 0;
        }
    });

    invBtn.addEventListener('click', () => {
        if (invBtn.dataset.dataFlag == 'red') {
            invBtn.style.backgroundColor = '#d4d4d4';
            invBtn.dataset.dataFlag = 'gray';
            sinBtn.innerHTML = 'sin';
            lnBtn.innerHTML = 'ln';
            cosBtn.innerHTML = 'cos';
            logBtn.innerHTML = 'log';
            tanBtn.innerHTML = 'tan';
            sqrtBtn.innerHTML = '&#8730';
            sqrtBtn.dataset.flag = 'sqrt';
            xPowYBtn.innerHTML = 'x<sup>y</sup>';
            xPowYBtn.dataset.flag = 'XpowY';

        } else {
            invBtn.style.backgroundColor = '#f1f1f1';
            invBtn.dataset.dataFlag = 'red';
            lnBtn.innerHTML = 'e<sup>x</sup>';
            sinBtn.innerHTML = 'sin<sup>-1</sup>';
            cosBtn.innerHTML = 'cos<sup>-1</sup>';
            logBtn.innerHTML = '10<sup>x</sup>';
            tanBtn.innerHTML = 'tan<sup>-1</sup>';
            sqrtBtn.innerHTML = 'x<sup>2</sup>';
            sqrtBtn.dataset.flag = 'xPow2';
            xPowYBtn.innerHTML = '<sup>y</sup>&#8730x';
            xPowYBtn.dataset.flag = 'YsqrtX';
        }
    });

    function activeRad() {
        degBtn.dataset.dataFlag = 'off';
        degBtn.setAttribute('class', 'calc-numpad-row__button');
        radBtn.dataset.dataFlag = 'on';
        radBtn.setAttribute('class', 'calc-numpad-row__button calc-numpad-row__button--switchOnRadDeg');
    }

    function getFactorial(value) {
        return (value >= 2) ? value * getFactorial(value - 1) : 1;
    }

    function checkNull(value) {//добавляет нажатое значение на дисплей
        if (userInput.value === '0' && !isNaN(value)) {
            userInput.value = value;
        } else {
            userInput.value += value;
        }
    }
    activeRad();
}

