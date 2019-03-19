
    describe("Function randomInt", function() {
    var startBalls = new BallsSVG("svgPlace");
    startBalls.start();
    function makeTest(a) {
        const testData = [{
            maxVal: a,
            minVal: -a,
        }, {
            maxVal: a,
            minVal: 0,
        }, {
            maxVal: 0,
            minVal: -a,
        }];
        testData.forEach(function (data) {
            const {
                maxVal,
                minVal
            } = data;
            let entry = startBalls.getRandomInt(minVal, maxVal);
            let outVal = false;
            if (entry >= minVal && entry <= maxVal) {
                outVal = true;
            }
            it(`should return True, when returned value is in interval ${minVal} and ${maxVal}`, function () {
                const actual = outVal;
                assert.equal(actual, true);
            });
        });
    }
    for (let i = 5; i <=50; i+=5){
        makeTest(i);
    }

});

    describe("Function randomColor", function() {
    var startBalls = new BallsSVG("svgPlace");
    startBalls.start();

    function makeTest() {
        const expected = startBalls.rndColor();
        const actual = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 1; i < expected.length-1; i++){
            let currentActual = false;
            for (let j = 0; j < actual.length; j++){
                if(expected[i] === actual[j]) {
                    currentActual = actual[j];
                    continue;
                }
            }
            it(`should return value ${currentActual} if it located in ${expected}`, function () {
                assert.deepEqual(currentActual, expected[i]);
            });
        }
    }
    for (let i = 0; i <=5; i++){
        makeTest();
    }
});

    describe("Function draw", function() {
    //Upper line
    describe("Ball's reflection in the upper left corner", () => {

        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        let bound = startBalls.svg.getBoundingClientRect();
        function linearMoveTest() {
            let expectedDirection = {cx: 16, cy: 16, dx: 1, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", 15);
            svgRectActual.setAttributeNS(null, "cy", 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", -1);
            svgRectActual.setAttributeNS(null, "dy", -1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");


            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's reflection at the top in the center of X", () => {

        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        let bound = startBalls.svg.getBoundingClientRect();

        function linearMoveTest() {
            let expectedDirection = {cx: ((bound.width - 15)/2), cy: 16, dx: 0, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", ((bound.width - 15)/2));
            svgRectActual.setAttributeNS(null, "cy", 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 0);
            svgRectActual.setAttributeNS(null, "dy", -1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's reflection in the upper right corner", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;
        function linearMoveTest() {
            let expectedDirection = {cx: svgWidth - 16, cy: 16, dx: -1, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", svgWidth - 15);
            svgRectActual.setAttributeNS(null, "cy", 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 1);
            svgRectActual.setAttributeNS(null, "dy", -1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });

    //Center line
    describe("Ball's reflection in the center of Y left of X", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        let bound = startBalls.svg.getBoundingClientRect();
        function linearMoveTest() {
            let expectedDirection = {cx: 16, cy: (bound.height - 15)/2, dx: 1, dy: 0};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", 15);
            svgRectActual.setAttributeNS(null, "cy", (bound.height - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", -1);
            svgRectActual.setAttributeNS(null, "dy", 0);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X left Y up direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';
        ;
        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2+1, cy: (svgHeight - 15)/2 +1, dx: 1, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 1);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none'
    });
    describe("Ball's move in X center Y up direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2-1, cy: (svgHeight - 15)/2 +1, dx: -1, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", -1);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X left Y center direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.height.baseVal.value;
        let svgHeight = startBalls.svg.width.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2+1, cy: (svgHeight - 15)/2 , dx: 1, dy: 0};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 1);
            svgRectActual.setAttributeNS(null, "dy", 0);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X right Y center direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.height.baseVal.value;
        let svgHeight = startBalls.svg.width.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2-1, cy: (svgHeight - 15)/2 , dx: -1, dy: 0};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", -1);
            svgRectActual.setAttributeNS(null, "dy", 0);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X left Y down direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2-1, cy: (svgHeight - 15)/2 +1 , dx: -1, dy: 1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", -1);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X left Y down direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2, cy: (svgHeight - 15)/2 -1 , dx: 0, dy: -1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 0);
            svgRectActual.setAttributeNS(null, "dy", -1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's move in X right Y down direction of the center of X center of Y position", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2+1, cy: (svgHeight - 15)/2 -1 , dx: 1, dy: -1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", (svgHeight - 15)/2);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 1);
            svgRectActual.setAttributeNS(null, "dy", -1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });

    //Down line
    describe("Ball's reflection in the lower left corner", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2, cy: svgHeight - 16 , dx: 0, dy: -1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", svgHeight - 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 0);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's reflection in the center below", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: (svgWidth - 15)/2, cy: svgHeight - 16 , dx: 0, dy: -1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", (svgWidth - 15)/2);
            svgRectActual.setAttributeNS(null, "cy", svgHeight - 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 0);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Ball's in the lower right", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");

        let svgWidth = startBalls.svg.width.baseVal.value;
        let svgHeight = startBalls.svg.height.baseVal.value;

        function linearMoveTest() {
            let expectedDirection = {cx: svgWidth - 16, cy: svgHeight - 16 , dx: -1, dy: -1};

            let svgRectActual = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            svgRectActual.setAttributeNS(null, "cx", svgWidth - 15);
            svgRectActual.setAttributeNS(null, "cy", svgHeight - 15);
            svgRectActual.setAttributeNS(null, "r", 15);
            svgRectActual.setAttributeNS(null, "dx", 1);
            svgRectActual.setAttributeNS(null, "dy", 1);
            svgRectActual.setAttributeNS(null, "fill", "#000000");
            document.querySelector("svg").appendChild(svgRectActual);

            startBalls.draw();

            let actualDirection = {};
            actualDirection.cx = +svgRectActual.getAttribute("cx");
            actualDirection.cy = +svgRectActual.getAttribute("cy");
            actualDirection.dx = +svgRectActual.getAttribute("dx");
            actualDirection.dy = +svgRectActual.getAttribute("dy");

            it(`should return value of dx ${actualDirection.dx}  and value of dy ${actualDirection.dy}`, function () {
                const actual = JSON.stringify(actualDirection, function (key, value) {
                    return value;
                });
                const expected = JSON.stringify(expectedDirection, function (key, value) {
                    return value;
                });
                assert.deepEqual(expected, actual);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });


});

    describe("Function createBall", function() {
    //Upper line
    describe("Create ball in the upper left corner", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let expectedPosition = {cx: 15, cy: 15};
            let event = {clientX: 1, clientY: 1};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in top center", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let expectedPosition = {cx: 300, cy: 15};
            let event = {clientX: 300, clientY: 1};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in top right", () => {
        document.getElementById('svgPlace').style.display='block';

        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;
            let expectedPosition = {cx: svgWidth-15, cy: 15};
            let event = {clientX: svgWidth, clientY: 1};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });

    //Center line
    describe("Create ball in left center", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: 15, cy: svgHeight/2};
            let event = {clientX: 1, clientY: svgHeight/2};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in the center", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: svgWidth/2, cy: svgHeight/2};
            let event = {clientX: svgWidth/2, clientY: svgHeight/2};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in the right center", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: svgWidth-15, cy: svgHeight/2};
            let event = {clientX: svgWidth, clientY: svgHeight/2};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y ${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });

    //Down line
    describe("Create ball in the bottom left", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: 15, cy: svgHeight-15};
            let event = {clientX: 1, clientY: svgHeight};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y ${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in the bottom center", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: svgWidth/2, cy: svgHeight-15};
            let event = {clientX: svgWidth/2, clientY: svgHeight};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y ${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
    describe("Create ball in the bottom right", () => {
        document.getElementById('svgPlace').style.display='block';


        var startBalls = new BallsSVG("svgPlace");
        function linearMoveTest() {
            let svgWidth = startBalls.svg.width.baseVal.value;
            let svgHeight = startBalls.svg.height.baseVal.value;

            let expectedPosition = {cx: svgWidth-15, cy: svgHeight-15};
            let event = {clientX: svgWidth, clientY: svgHeight};
            startBalls.createBall(event);

            let actualPosition = {
                cx : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cx"),
                cy : +startBalls.svg.getElementsByTagName("circle")[0].getAttribute("cy")
            };

            it(`should return value of X ${expectedPosition.cx}  and value of Y ${expectedPosition.cy}`, function () {
                const actual = JSON.stringify(actualPosition, function (key, value) {

                    return value;
                });
                const expected = JSON.stringify(expectedPosition, function (key, value) {

                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
        var svg =document.querySelector("svg");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        document.getElementById('svgPlace').style.display='none';
    });
});
