window.onload = () => {
    init();
}

let myCanvas, 
    ctx,
    h,
    w;

function init() {
    try {
        let flag = false;
        let divBalls = document.getElementById('divBalls');
        divBalls.innerHTML = '<canvas id="myCanvas"></canvas>';
        myCanvas = document.getElementById("myCanvas");
        ctx = myCanvas.getContext("2d");
        w = 500;
        h = 500;
        //canvas styles
        myCanvas.height = h;
        myCanvas.width = w;
        myCanvas.addEventListener('click', addBall);
        myCanvas.addEventListener("mousemove", getMousePosition);
        setInterval(update, 20);
        flag = true;
        return flag;
    } catch (e) {
        throw new Error(`div element not found at DOM!!!`);
    }
}

function getMousePosition (event) {
    let flag = false;
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;
    flag = true;
    return flag;
}

let mouse = {};
const r = 10; //r-радиус шарика

//balls array
let ball = [];
//Class for ball
function Ball(x, y, r, c, vx, vy) {
    this.x = x; //starting x coordinate
    this.y = y; //starting y coordinate
    this.r = r; //radius
    this.c = c; //color
    this.vx = vx; // x direction speed
    this.vy = vy; // y direction speed
    this.update = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
        //changing direction on hitting wall
        if (this.y >= (w - 10) || this.y <= 10) {
            this.vy = -this.vy;
        }
        if (this.x >= (h - 10) || this.x <= 10) {
            this.vx = -this.vx;
        }
    }
}

//clearing canvas
function clearCanvas() {
    try {
        ctx.clearRect(0, 0, w, h);
        return true;
    } catch (e) {
        throw new Error(`div element not found at DOM!!!`);
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let count = 0;//counting balls

//adding balls
function addBall() {
    ball[count] = new Ball(mouse.x, mouse.y, r, getRandomColor(), randomDirectionX(), randomDirectionY()); 
    count++;
    return ball;
}

function randomDirectionX() {
    let speed = 1;
    let direction = getRandomInt(1,360)*Math.PI/180;
    let dx = Math.cos(direction)*speed;
    return dx;
}

function randomDirectionY() {
    let speed = 1;
    let direction = getRandomInt(1,360)*Math.PI/180;
    let dy = Math.sin(direction)*speed;
    return dy;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//updating canvas
function update() {
    let flag = false;
    clearCanvas();
    for (let i = 0; i < count; i++) {
        ball[i].update();
    }
    flag = true;
    return flag;
}








