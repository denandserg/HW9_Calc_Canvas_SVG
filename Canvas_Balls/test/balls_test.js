describe("Function randomInt", function() {
    var startBalls = new BallsCanvas("myCanvas");
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

describe("Function rndColor", function() {
    var startBalls = new BallsCanvas("myCanvas");
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
    describe("Ball's reflection in the upper left corner",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 16,
                    y : 16,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];

            startBalls.items[0] = {
                R : 15,
                x : 15,
                y : 15,
                dx : -1,
                dy : -1,
                color: "#000000",};
           startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's reflection at the top in the center of X",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : (startBalls.canvas.width - 15) / 2,
                    y : 16,
                    dx : 0,
                    dy : 1,
                    color: "#808080",
                }];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15) / 2,
                y : 15,
                dx : 0,
                dy : -1,
                color: "#808080"};
            startBalls.draw();

            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy ${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's reflection in the upper right corner",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width - 16,
                    y : 16,
                    dx : -1,
                    dy : 1,
                    color: "#C0C0C0",
                }];

            startBalls.items[0] = {
                R : 15,
                x : startBalls.canvas.width - 15,
                y : 15,
                dx : 1,
                dy : -1,
                color: "#000000",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy ${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    //Center line
    describe("Ball's reflection in the center of Y left of X",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : 16,
                y : (startBalls.canvas.height - 15)/2,
                dx : 1,
                dy : 0,
                color: "#00FFFF",}
                ];

            startBalls.items[0] = {
                R : 15,
                x : 15,
                y : (startBalls.canvas.height - 15)/2,
                dx : -1,
                dy : 0,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Ball's move in X left Y up direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2 +1,
                y : (startBalls.canvas.height - 15)/2 + 1,
                dx : 1,
                dy : 1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : 1,
                dy : 1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's move in X center Y up direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2 + 1,
                dx : 0,
                dy : 1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : 0,
                dy : 1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's move in X right Y up direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2-1,
                y : (startBalls.canvas.height - 15)/2+1,
                dx : -1,
                dy : 1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : -1,
                dy : 1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Ball's move in X left Y center direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2+1,
                y : (startBalls.canvas.height - 15)/2,
                dx : 1,
                dy : 0,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : 1,
                dy : 0,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Ball's move in X right Y center direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2-1,
                y : (startBalls.canvas.height - 15)/2,
                dx : -1,
                dy : 0,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : -1,
                dy : 0,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Ball's move in X left Y down direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2-1,
                y : (startBalls.canvas.height - 15)/2+1,
                dx : -1,
                dy : 1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : -1,
                dy : 1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's move in X center Y down direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2 - 1,
                dx : 0,
                dy : -1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : 0,
                dy : -1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's move in X right Y down direction of the center of X center of Y position",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : (startBalls.canvas.width - 15)/2+1,
                y : (startBalls.canvas.height - 15)/2-1,
                dx : 1,
                dy : -1,
                color: "#00FFFF",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : (startBalls.canvas.height - 15)/2,
                dx : 1,
                dy : -1,
                color: "#00FFFF",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    //Down line
    describe("Ball's reflection in the lower left corner",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 16,
                    y : startBalls.canvas.height - 16,
                    dx : 1,
                    dy : -1,
                    color: "#FF00FF",
                }];

            startBalls.items[0] = {
                R : 15,
                x : 15,
                y : startBalls.canvas.height - 15,
                dx : -1,
                dy : 1,
                color: "#FF00FF"};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's reflection in the center below",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : (startBalls.canvas.width - 15)/2,
                    y : startBalls.canvas.height - 16,
                    dx : 0,
                    dy : -1,
                    color: "#800000",
                }];

            startBalls.items[0] = {
                R : 15,
                x : (startBalls.canvas.width - 15)/2,
                y : startBalls.canvas.height - 15,
                dx : 0,
                dy : 1,
                color: "#800000",};
            startBalls.draw();

            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy ${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Ball's in the lower right",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [{
                R : 15,
                x : startBalls.canvas.width - 16,
                y : startBalls.canvas.height - 16,
                dx : -1,
                dy : -1,
                color: "#FF0000",}
            ];

            startBalls.items[0] = {
                R : 15,
                x : startBalls.canvas.width - 15,
                y : startBalls.canvas.height - 15,
                dx : 1,
                dy : 1,
                color: "#FF0000",};
            startBalls.draw();
            it(`should return value of dx ${startBalls.items[0].dx}  and value of dy${startBalls.items[0].dy}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

});

describe("Function createBall", function() {
    describe("Create ball in the upper left corner",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 15,
                    y : 15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX:0,clientY:0};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in top center",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 300,
                    y : 15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX:300,clientY:0};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in top right",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width - 15,
                    y : 15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: startBalls.canvas.width,clientY:0};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Create ball in left center",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 15,
                    y : startBalls.canvas.height/2,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: 0, clientY:startBalls.canvas.height/2};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in the center",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width/2,
                    y : startBalls.canvas.height/2,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: startBalls.canvas.width/2, clientY:startBalls.canvas.height/2};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in the right center",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width -15,
                    y : startBalls.canvas.height/2,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: startBalls.canvas.width, clientY:startBalls.canvas.height/2};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

    describe("Create ball in the bottom left",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : 15,
                    y : startBalls.canvas.height-15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: 0, clientY:startBalls.canvas.height};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in the bottom center",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width/2,
                    y : startBalls.canvas.height-15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: startBalls.canvas.width/2, clientY:startBalls.canvas.height};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });
    describe("Create ball in the bottom right",()=> {
        var startBalls = new BallsCanvas("myCanvas");

        function linearMoveTest() {
            let items = [
                {
                    R : 15,
                    x : startBalls.canvas.width-15,
                    y : startBalls.canvas.height-15,
                    dx : 1,
                    dy : 1,
                    color: "#000000",
                }];
            let event = {clientX: startBalls.canvas.width, clientY:startBalls.canvas.height};
            startBalls.createBall(event);

            it(`should return value of X ${startBalls.items[0].x}  and value of Y${startBalls.items[0].y}`, function () {
                const actual = JSON.stringify(items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                const expected = JSON.stringify(startBalls.items, function (key, value) {
                    if (key === 'color') {
                        return undefined;
                    }
                    if (key === 'dx') {
                        return undefined;
                    }
                    if (key === 'dy') {
                        return undefined;
                    }
                    return value;
                });
                assert.deepEqual(actual, expected);
            });

        }

        linearMoveTest();
    });

});
