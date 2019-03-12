describe('Function Init()', () => {
    it('should return true, when function done', () => {
        const actual = init();
        assert.equal(actual, true);
    });
    it(`should throw Error when div insert not found`, function () {
        assert.throw(function () {
            let divClock = document.getElementById('clockCanvas');
            divClock.id='bal';
            init();
        }, 'div element not found at DOM!!!');
    });
    after(() => {
        let divAdd = document.getElementById('bal');
        divAdd.id = 'clockCanvas';
    });
});

describe('Function getCanvas()', () => {
    describe('return Error', () => {
        before(() => {
            let canvas = document.getElementById("myCanvas");
            canvas.id = 'none';
        });
        it(`should throw Error when div insert not found`, function () {
            assert.throw(function () {
                getCanvas();
            }, 'div element not found at DOM!!!');
        });
        after(() => {
            let canvas = document.getElementById("none");
            canvas.id = 'myCanvas';
        });
    });
    it('should return true, when function done', () => {
       const actual = getCanvas();
        assert.equal(actual, true);
    });
});

describe('Function drawClock()', () => {
    it('should return true, when function done', () => {
       const actual = getCanvas();
        assert.equal(actual, true);
    });
});

describe('Function drawLines()', () => {
    it('should return true, when function done', () => {
       const actual = getCanvas();
        assert.equal(actual, true);
    });
});

describe('Function drawTime()', () => {
    it('should return true, when function done', () => {
       const actual = getCanvas();
        assert.equal(actual, true);
    });
});

describe('Function drawHand()', () => {
    it('should return true, when function done', () => {
       const actual = getCanvas();
        assert.equal(actual, true);
    });
});

describe('CanvasMock and ContextMock', ()=> {
    it('should be able to return width and height', ()=> {
        let canvas = new CanvasMock(500,600);
        assert.equal(canvas.width, 500);
        assert.equal(canvas.height, 600);
    });
    it('should be able to update mock for getContext', ()=> {
        let canvas = new CanvasMock(500,600);
        let ctx = canvas.getContext('2d');
        assert.equal(canvas.mock, '[getContext 2d]');
    });
});

describe('drawCanvas', ()=> {
    it('should be able to return correct canvas', ()=> {
        let testCanvas = new CanvasMock(500,600);
        let ctx = testCanvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(8,8);
        ctx.stroke();
        assert.strictEqual(JSON.stringify(drawCanvas(new CanvasMock(500,600), 8, 8)), JSON.stringify(ctx));
    });
});