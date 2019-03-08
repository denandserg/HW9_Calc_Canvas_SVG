window.onload = () => {
    init();
}

function init() {
    let divImp = document.getElementById('clockCanvas');
    divImp.innerHTML = '<canvas id="myCanvas" width="300" height="300" ></canvas>';
    getCanvas(); 
    setInterval(drawClock, 1000); //вызываем drawClock с интервалом в 1000 миллисекунд (1 секунда)
}

let canvas,
    ctx,
    radius;

function getCanvas() {
    canvas = document.getElementById("myCanvas"); //Создание холста объекта (let) холст из элемента HTML холст:
    ctx = canvas.getContext("2d"); //Создание 2d объект чертежа (переменная CTX) для объекта холста:
    radius = canvas.height / 2; //Вычислить радиус часов, используя высоту холста:
    ctx.translate(radius, radius); //Переназначить (0,0) положение (рисованного объекта) в центре холста:
    radius = radius * 0.9;
}

function drawClock() {
    drawTime(ctx, radius);
    drawLines(ctx, radius);
}

function drawLines(ctx) {
    ctx.clearRect(-150, -150, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
    }
    ctx.strokeStyle = 'red';
    ctx.stroke(); // нарисовали то, что ранее описали
    ctx.restore(); // достаем последний сохраненный контекст из стэка
    ctx.save();
}

function drawTime(ctx, radius) {
    ctx.clearRect(-150, -150, canvas.width, canvas.height);
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //часовая стрелка:
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    ctx.strokeStyle = 'black';
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //минутная стрелка:
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    ctx.strokeStyle = 'green';
    drawHand(ctx, minute, radius * 0.8, radius * 0.05);
    // секундная стрелка:
    second = (second * Math.PI / 30);
    ctx.strokeStyle = 'blue';
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

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
        return this.context
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
