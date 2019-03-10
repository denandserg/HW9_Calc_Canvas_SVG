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