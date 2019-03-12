window.addEventListener('load', function () {

    function click(button) {
        const event = new MouseEvent('click');
        button.dispatchEvent(event);
    }

    const userInput = document.getElementById('userInput');
    const ceBtn = document.getElementById('ce');
    const numbersBtn = document.querySelectorAll('.calc-numpad-row__button--number');

    function getNumBtn(n) { //получить элемент кнопки по цифре которую она представляет
        n = n.toString();
        for (let i = 0; i < numbersBtn.length; i++) {
            if (n === numbersBtn[i].value) {
                return numbersBtn[i];
            }
        }
    }

    const operationsBtn = document.querySelectorAll('.calc-numpad-row__button--operationButton');

    function getOperationBtn(s) { //получить элемент кнопки по знаку
        s = s.toString();
        for (let i = 0; i < operationsBtn.length; i++) {
            if (s === operationsBtn[i].value) {
                return operationsBtn[i];
            }
        }
    }

    const resultBtn = document.getElementById('result');

    describe('Number buttons', function () {
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        for (let i = 0; i < numbersBtn.length; i++) {
            it(`should display ${numbersBtn[i].value}`, function () {
                let event = new MouseEvent('click');
                numbersBtn[i].dispatchEvent(event);
                assert.equal(userInput.value, numbersBtn[i].value);
            });
        }

        it('should display 725590', function () {
            let event = new MouseEvent('click');
            getNumBtn(7).dispatchEvent(event);
            event = new MouseEvent('click');
            getNumBtn(2).dispatchEvent(event);
            event = new MouseEvent('click');
            getNumBtn(5).dispatchEvent(event);
            event = new MouseEvent('click');
            getNumBtn(5).dispatchEvent(event);
            event = new MouseEvent('click');
            getNumBtn(9).dispatchEvent(event);
            event = new MouseEvent('click');
            getNumBtn(0).dispatchEvent(event);
            assert.equal(userInput.value, '725590');
        });
    });

    describe('operation Buttons', function () {
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('5*5 should return 25', function () {
            const mult = getOperationBtn('*');
            click(getNumBtn(5));
            click(mult);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '25');
        });

        it('0*5 should return 0', function () {
            const mult = getOperationBtn('*');
            click(getNumBtn(0));
            click(mult);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '0');
        });

        it('5*0 should return 0', function () {
            const mult = getOperationBtn('*');
            click(getNumBtn(5));
            click(mult);
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '0');
        });

        it('5*1*2 should return 10', function () {
            const mult = getOperationBtn('*');
            click(getNumBtn(5));
            click(mult);
            click(getNumBtn(1));
            click(mult);
            click(getNumBtn(2));
            click(resultBtn);
            assert.equal(userInput.value, '10');
        });

        it('5*1*2*350 should return 3500', function () {
            const mult = getOperationBtn('*');
            click(getNumBtn(5));
            click(mult);
            click(getNumBtn(1));
            click(mult);
            click(getNumBtn(2));
            click(mult);
            click(getNumBtn(3));
            click(getNumBtn(5));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '3500');
        });

        it('5-5 should return 0', function () {
            const minus = getOperationBtn('-');
            click(getNumBtn(5));
            click(minus);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '0');
        });

        it('5-10 should return -5', function () {
            const minus = getOperationBtn('-');
            click(getNumBtn(5));
            click(minus);
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '-5');
        });

        it('5+10 should return 15', function () {
            const plus = getOperationBtn('+');
            click(getNumBtn(5));
            click(plus);
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '15');
        });

        it('-5+10 should return 5', function () {
            const minus = getOperationBtn('-');
            const plus = getOperationBtn('+');
            click(minus);
            click(getNumBtn(5));
            click(plus);
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '5');
        });

        it('5+10+0 should return 5', function () {
            const plus = getOperationBtn('+');
            click(getNumBtn(5));
            click(plus);
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(plus);
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '15');
        });

        it('10 / 5 should return 2', function () {
            const div = getOperationBtn('/');
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(div);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '2');
        });

        it('0 / 5 should return 0', function () {
            const div = getOperationBtn('/');
            click(getNumBtn(0));
            click(div);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '0');
        });

        it('5 / 0 should', function () {
            const div = getOperationBtn('/');
            click(getNumBtn(5));
            click(div);
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, 'Infinity');
        });
    });

    describe('CE', function () {
        const ceBtn = document.getElementById('ce');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('clears numbers', function () {
            click(getNumBtn(5));
            click(getNumBtn(7));
            click(getNumBtn(0));
            click(ceBtn);
            assert.equal(userInput.value, '57');
        });

        it('clears numbers', function () {
            click(getNumBtn(5));
            click(getNumBtn(7));
            click(getNumBtn(0));
            click(ceBtn);
            click(ceBtn);
            assert.equal(userInput.value, '0');
        });
    });

    describe('decimal', function () {
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('prints point', function () {
            const decimalBtn = document.getElementById('decimal');
            click(getNumBtn(1));
            click(decimalBtn);
            click(getNumBtn(5));
            assert.equal(userInput.value, '1.5');
        });

        it('1.5 + 5 should return 6.5', function () {
            const decimalBtn = document.getElementById('decimal');
            const plus = getOperationBtn('+');
            click(getNumBtn(1));
            click(decimalBtn);
            click(getNumBtn(5));
            click(plus);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, '6.5');
        });
    });

    describe('result button', function () {
        it('should print the result', function () {
            const plus = getOperationBtn('+');
            click(getNumBtn(5));
            click(plus);
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, '15');
        })
    });

    describe('percent', function () {
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should return a percent', function () {
            let percentBtn = document.getElementById('percent');
            click(getNumBtn(5));
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(percentBtn);
            click(getNumBtn(7));
            click(resultBtn);
            assert.equal(userInput.value, '35.699999999999996');
        })
    });

    describe('left and right bracket', function () {
        let brRightBtn = document.getElementById('brRight');
        let brLeftBtn = document.getElementById('brLeft');

        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should correctly calculate the expression (5+5)*5', function () {
            let plus = getOperationBtn('+');
            let mult = getOperationBtn('*');
            let five = getNumBtn(5);
            click(brLeftBtn);
            click(five);
            click(plus);
            click(five);
            click(brRightBtn);
            click(mult);
            click(five);
            assert(userInput.value, 50);
        });
    });

    describe('rad', function () {
        let radBtn = document.getElementById('rad');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should change class', function () {
            click(radBtn);
            assert.isTrue(radBtn.classList.contains('calc-numpad-row__button--switchOnRadDeg'));
        });

        it('should set dataset flag', function () {
            click(radBtn);
            assert.isTrue(radBtn.dataset.dataFlag === 'on');
        });

    });

    describe('deg', function () {
        let degBtn = document.getElementById('deg');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should change class', function () {
            click(degBtn);
            assert.isTrue(degBtn.classList.contains('calc-numpad-row__button--switchOnRadDeg'));
        });

        it('should set dataset flag', function () {
            click(degBtn);
            assert.isTrue(degBtn.dataset.dataFlag === 'on');
        });

    });

    describe('factorial', function () {
        let factorialBtn = document.getElementById('factorial');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should return 120', function () {
            click(getNumBtn(5));
            click(factorialBtn);
            assert.equal(userInput.value, 120);
        });

        it('should return 3628800', function () {
            click(getNumBtn(1));
            click(getNumBtn(0));
            click(factorialBtn);
            assert.equal(userInput.value, 3628800);
        });
    });

    describe('sin', function () {
        let sinBtn = document.getElementById('sin');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 0.08715574274765817', function () {
            click(getNumBtn(5));
            click(sinBtn);
            assert.equal(userInput.value, 0.08715574274765817);
        });
    });



    describe('cos', function () {
        let cosBtn = document.getElementById('cos');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 0.9961946980917455', function () {
            click(getNumBtn(5));
            click(cosBtn);
            assert.equal(userInput.value, 0.9961946980917455);
        });
    });

    describe('ln', function () {
        let lnBtn = document.getElementById('ln');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 1.60943791243', function () {
            click(getNumBtn(5));
            click(lnBtn);
            assert.equal(userInput.value, 1.6094379124341003);
        });
    });

    describe('π', function () {
        let piBtn = document.getElementById('pi');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 3.14159265359', function () {
            click(piBtn);
            assert.equal(userInput.value, 3.14159265359);
        });
    });

    describe('log', function () {
        let logBtn = document.getElementById('log');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 0.6989700043360189', function () {
            click(getNumBtn(5));
            click(logBtn);
            assert.equal(userInput.value, 0.6989700043360189);
        });
    });

    describe('e', function () {
        let eBtn = document.getElementById('e');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 2.71828182846', function () {
            click(eBtn);
            assert.equal(userInput.value, 2.71828182846);
        });
    });

    describe('tan', function () {
        let tanBtn = document.getElementById('tan');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 0.08748866352592401', function () {
            click(getNumBtn(5));
            click(tanBtn);
            assert.equal(userInput.value, 0.08748866352592401);
        });
    });

    describe('square root', function () {
        let sqrtBtn = document.getElementById('sqrt');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 2.23606797749979', function () {
            click(getNumBtn(5));
            click(sqrtBtn);
            assert.equal(userInput.value, 2.23606797749979);
        });
    });

    describe('modulus', function () {
        let modBtn = document.getElementById('mod');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should return ', function () {
            click(getNumBtn(5));
            click(modBtn);
            click(getNumBtn(5));
            click(resultBtn);
            assert.equal(userInput.value, 0);
        });

        it('should return ', function () {
            click(getNumBtn(5));
            click(modBtn);
            click(getNumBtn(4));
            click(resultBtn);
            assert.equal(userInput.value, 1);
        });

        it('should return ', function () {
            click(getNumBtn(5));
            click(getNumBtn(0));
            click(modBtn);
            click(getNumBtn(4));
            click(getNumBtn(0));
            click(resultBtn);
            assert.equal(userInput.value, 10);
        });
    });

    describe('exp', function () {
        let expBtn = document.getElementById('exp');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 148.4131591025766', function () {
            click(getNumBtn(5));
            click(expBtn);
            assert.equal(userInput.value, 148.4131591025766);
        });
    });

    describe('pow', function () {
        xPowYBtn = document.getElementById('xPowY');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });

        it('should return 25', function () {
            click(getNumBtn(5));
            click(xPowYBtn);
            click(getNumBtn(2));
            click(xPowYBtn);
            assert.equal(userInput.value, 25);
        });

        it('should return 125', function () {
            click(getNumBtn(5));
            click(xPowYBtn);
            click(getNumBtn(3));
            click(xPowYBtn);
            assert.equal(userInput.value, 125);
        });
    });

    describe('asin', function () {
        let sinBtn = document.getElementById('sin');
        let invBtn = document.getElementById('inv');
        let radBtn = document.getElementById('rad');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 1.5707963267948966', function () {
            click(radBtn);
            click(getNumBtn(1));
            click(invBtn);
            click(sinBtn);
            assert.equal(userInput.value, 1.5707963267948966);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('acos', function () {
        let cosBtn = document.getElementById('cos');
        let invBtn = document.getElementById('inv');
        let radBtn = document.getElementById('rad');
        let decimalBtn = document.getElementById('decimal');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 1.4706289056333368', function () {
            click(radBtn);
            click(getNumBtn(0));
            click(decimalBtn);
            click(getNumBtn(1));
            click(invBtn);
            click(cosBtn);
            assert.equal(userInput.value, 1.4706289056333368);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('atan', function () {
        let tanBtn = document.getElementById('tan');
        let invBtn = document.getElementById('inv');
        let radBtn = document.getElementById('rad');
        let decimalBtn = document.getElementById('decimal');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 0.4636476090008061', function () {
            click(radBtn);
            click(getNumBtn(0));
            click(decimalBtn);
            click(getNumBtn(5));
            click(invBtn);
            click(tanBtn);
            assert.equal(userInput.value, 0.4636476090008061);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('e pow x', function () {
        let lnBtn = document.getElementById('ln');
        let invBtn = document.getElementById('inv');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 12.208071553696506', function () {
            click(getNumBtn(3));
            click(invBtn);
            click(lnBtn);
            assert.equal(userInput.value, 12.208071553696506);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('10 pow x', function () {
        let logBtn = document.getElementById('log');
        let invBtn = document.getElementById('inv');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 1000', function () {
            click(getNumBtn(3));
            click(invBtn);
            click(logBtn);
            assert.equal(userInput.value, 1000);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('x pow 2', function () {
        let sqrtBtn = document.getElementById('sqrt');
        let invBtn = document.getElementById('inv');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 9', function () {
            click(getNumBtn(3));
            click(invBtn);
            click(sqrtBtn);
            assert.equal(userInput.value, 9);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('x sqrt pow y', function () {
        let xPowYBtn = document.getElementById('xPowY');
        let invBtn = document.getElementById('inv');
        beforeEach(function () {
            let event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
            event = new MouseEvent('click');
            ceBtn.dispatchEvent(event);
        });
        it('should return 3', function () {
            click(getNumBtn(2));
            click(getNumBtn(7));
            click(invBtn);
            click(xPowYBtn);
            click(getNumBtn(3));
            click(xPowYBtn);
            assert.equal(userInput.value, 3);
        });
        after(() => {
            click(invBtn);
        });
    });

    describe('Inv', function () {
        let invBtn = document.getElementById('inv');
        let sinBtn = document.getElementById('sin');
        let lnBtn = document.getElementById('ln');
        let cosBtn = document.getElementById('cos');
        let logBtn = document.getElementById('log');
        let tanBtn = document.getElementById('tan');
        let sqrtBtn = document.getElementById('sqrt');
        let xPowYBtn = document.getElementById('xPowY');
        describe('Inv not push', () => {
            describe('set innerHtml button - sin', () => {
                it('should return true, when sin innerHTML = sin', () => {
                    assert.equal(sinBtn.innerHTML, 'sin');
                });
            });
            describe('cos innerHtml button - cos', () => {
                it('should return true, when cos innerHTML = cos', () => {
                    assert.equal(cosBtn.innerHTML, 'cos');
                });
            });
            describe('tan innerHtml button - tan', () => {
                it('should return true, when tan innerHTML = tan', () => {
                    assert.equal(tanBtn.innerHTML, 'tan');
                });
            });
            describe('ln innerHtml button - ln', () => {
                it('should return true, when ln innerHTML = ln', () => {
                    assert.equal(lnBtn.innerHTML, 'ln');
                });
            });
            describe('log innerHtml button - log', () => {
                it('should return true, when log innerHTML = log', () => {
                    assert.equal(logBtn.innerHTML, 'log');
                });
            });
            describe('sqrt innerHtml button - sqrt', () => {
                it('should return true, when sqrt innerHTML = sqrt', () => {
                    assert.equal(sqrtBtn.innerHTML, '√');
                });
            });
            describe('xPowY innerHtml button - xPowY', () => {
                it('should return true, when xPowY innerHTML = xPowY', () => {
                    assert.equal(xPowYBtn.innerHTML, 'x<sup>y</sup>');
                });
            });
        });
        describe('Inv push', () => {
            
            describe('sin innerHtml button - asin', () => {
                it('should return true, when sin innerHTML = asin', () => {
                    click(invBtn);
                    assert.equal(sinBtn.innerHTML, 'sin<sup>-1</sup>');
                    click(invBtn);
                });
            });
            describe('cos innerHtml button - acos', () => {
                it('should return true, when cos innerHTML = acos', () => {
                    click(invBtn);
                    assert.equal(cosBtn.innerHTML, 'cos<sup>-1</sup>');
                    click(invBtn);
                });
            });
            describe('tan innerHtml button - atan', () => {
                it('should return true, when tan innerHTML = atan', () => {
                    click(invBtn);
                    assert.equal(tanBtn.innerHTML, 'tan<sup>-1</sup>');
                    click(invBtn);
                });
            });
            describe('ln innerHtml button - ln', () => {
                it('should return true, when ln innerHTML = ln', () => {
                    click(invBtn);
                    assert.equal(lnBtn.innerHTML, 'e<sup>x</sup>');
                    click(invBtn);
                });
            });
            describe('log innerHtml button - log', () => {
                it('should return true, when log innerHTML = log', () => {
                    click(invBtn);
                    assert.equal(logBtn.innerHTML, '10<sup>x</sup>');
                    click(invBtn);
                });
            });
            describe('sqrt innerHtml button - sqrt', () => {
                it('should return true, when sqrt innerHTML = sqrt', () => {
                    click(invBtn);
                    assert.equal(sqrtBtn.innerHTML, 'x<sup>2</sup>');
                    click(invBtn);
                });
            });
            describe('xPowY innerHtml button - xPowY', () => {
                it('should return true, when xPowY innerHTML = xPowY', () => {
                    click(invBtn);
                    assert.equal(xPowYBtn.innerHTML, '<sup>y</sup>√x');
                    click(invBtn);
                });
            });
        });
    });
});