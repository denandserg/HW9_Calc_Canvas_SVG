function drawCanvas(canvasObj, x, y) {
    let canvas = canvasObj;
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, y);
    context.stroke();
    return context;
}

function CanvasMock(width, height) {
    this.mock = [];
    this.width = width;
    this.height = height;
    this.context = new ContextMock(this.mock);

    this.getContext = (string) => {
        this.mock.push('[getContext ' + string + ']');
        return this.context;
    }
}

function ContextMock(mock) {
    this.mock = mock;
    this.beginPath = () => {
        this.mock.push('[beginPath]');
    }

    this.moveTo = (x, y) => {
        this.mock.push('[moveTo ' + x + ', ' + y + ']');
    }

    this.lineTo = (x, y) => {
        this.mock.push('[lineTo ' + x + ', ' + y + ']');
    }

    this.stroke = () => {
        this.mock.push('[stroke]');
    }
}