window.onload = () => {
    init();
}

function init() {
    try {
        let flag = false;
        let divImp = document.getElementById('clockCanvas');
        divImp.innerHTML = '<canvas id="myCanvas" width="300" height="300" ></canvas>';
        getCanvas();
        setInterval(drawClock, 1000); //вызываем drawClock с интервалом в 1000 миллисекунд (1 секунда)
        flag = true;
        return flag;
    } catch (e) {
        throw new Error('div element not found at DOM!!!');
    }
}

let canvas,
    ctx,
    radius;

function getCanvas() {
    try {
        let flag = false;
        canvas = document.getElementById("myCanvas"); //Создание холста объекта (let) холст из элемента HTML холст:
        ctx = canvas.getContext("2d"); //Создание 2d объект чертежа (переменная CTX) для объекта холста:
        radius = canvas.height / 2; //Вычислить радиус часов, используя высоту холста:
        ctx.translate(radius, radius); //Переназначить (0,0) положение (рисованного объекта) в центре холста:
        radius = radius * 0.9;
        flag = true;
        return flag;
    } catch (e) {
        throw new Error('div element not found at DOM!!!');
    }
}

function drawClock() {
    let flag = false;
    ctx.clearRect(-150, -150, canvas.width, canvas.height);
    drawLines(ctx);
    drawTime(ctx, radius);
    flag = true;
    return flag;
}

function drawLines(ctx) {
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
