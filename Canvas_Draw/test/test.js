describe('Function Init()', () => {
    it('should return true, when function done', () => {
        const actual = init();
        assert.equal(actual, true);
    });
    it(`should throw Error when div insert not found`, function () {
        assert.throw(function () {
            let divDraw = document.getElementById('divDraw');
            divDraw.id='bal';
            init();
        }, 'div element not found at DOM!!!');
    });
    after(() => {
        let divAdd = document.getElementById('bal');
        divAdd.id = 'divDraw';
    });
});

describe('Function drawMove()', () => {
    const event = {
        pageX: '10',
        pageY: '10',
        offsetLeft: '5',
        offsetTop: '4'
    };
    it('should return false, when function not done', () => {
        const actual = drawMove();
        assert.equal(actual, false);
    });
    it('should return true, when function done', () => {
        drawTrue(event);
        const actual = drawMove(event);
        assert.equal(actual, true);
    });
    after(() => {
        drawFalse(event);
    });
});

describe('Function drawFalse()', () => {
    const event = {
        pageX: '10',
        pageY: '10',
        offsetLeft: '5',
        offsetTop: '4'
    };
    it('should return false, when function not done', () => {
        const actual = drawFalse();
        assert.equal(actual, false);
    });
    it('should return true, when function done', () => {
        drawTrue(event);
        drawMove(event);
        const actual = drawFalse(event);
        assert.equal(actual, true);
    });
});

describe('Function drawTrue()', () => {
    const event = {
        pageX: '100',
        pageY: '100',
        offsetLeft: '5',
        offsetTop: '4'
    };
    it('should return true, when function done', () => {
        const actual = drawTrue(event);
        assert.equal(actual, true);
    });
    it('should return false, when function not done', () => {
        const actual = drawTrue(event);
        assert.equal(actual, false);
    });
    after(() => {
        drawFalse(event);
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