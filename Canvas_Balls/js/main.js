

function BallsCanvas(canvasObj){
    this.canvas = document.getElementById(canvasObj);
    this.context = this.canvas.getContext("2d");
    this.items = [ ];
    let obj = this;
    this.canvas.addEventListener('click', function(event) {
        obj.createBall(event);
    });
}

BallsCanvas.prototype.draw = function () {
    this.context.fillStyle = "#c0c0c0";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.width);

    for(let i = 0; i <this.items.length; i++) {
        this.context.beginPath();
        this.context.arc(this.items[i].x, this.items[i].y, this.items[i].R, 0, Math.PI * 2);
        this.context.fillStyle = this.items[i].color;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();

        if (this.items[i].x + this.items[i].dx > this.canvas.width - this.items[i].R || this.items[i].x + this.items[i].dx < this.items[i].R) {
            this.items[i].dx = -this.items[i].dx;
        }
        if (this.items[i].y + this.items[i].dy > this.canvas.height - this.items[i].R || this.items[i].y + this.items[i].dy < this.items[i].R) {
            this.items[i].dy = -this.items[i].dy;
        }

        this.items[i].x += this.items[i].dx;
        this.items[i].y += this.items[i].dy;
    }

}

BallsCanvas.prototype.start = function (){
    setInterval(()=>{this.draw()}, 10);
}

BallsCanvas.prototype.createBall = function (event){

    let rect = this.canvas.getBoundingClientRect();
    let X = event.clientX - rect.left;
    let Y = event.clientY - rect.top;
    let fi = this.getRandomInt(1,360)*Math.PI/180;
    let v = 1;
    let r = 15;
    let randomX = Math.cos(fi)*v;
    let randomY = Math.sin(fi)*v;


    if (X + randomX >= this.canvas.width - r) {
        X-=r;
    }
    if (X + randomX <= r) {
        X+=r;
    }
    if (Y + r >= this.canvas.height - r) {
        Y-=r;
    }
    if (Y + randomY <= r) {
        Y+=r;
    }

    let obj = {R: r, x: X, y: Y,  dx: randomX, dy: randomY, color: BallsCanvas.prototype.rndColor()} ;
    this.items.push(obj);
};

BallsCanvas.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

BallsCanvas.prototype.rndColor = function() {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

var startBalls = new BallsCanvas("myCanvas");
startBalls.start();



