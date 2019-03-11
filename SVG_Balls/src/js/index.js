window.onload = () => {
    init();
}

let svg = null,
    r = 25,
    h = 600,
    w = 800,
    dx,
    dy,
    intv = null,
    masBalls,
    mouse = {},
    bound;

function Ball(r, cx, cy, dx, dy, color) {
    this.r = r;
    this.deltaX = dx;
    this.deltaY = dy;
    this.cx = cx;
    this.cy = cy;
    this.color = color;
}

function getMousePosition(event) {
    let flag = false;
    bound = svg.getBoundingClientRect();
    mouse.x = event.clientX - bound.left - svg.clientLeft;
    mouse.y = event.clientY - bound.top - svg.clientTop;
    flag = true;
    return flag;
}

function init() {
    try {
        let flag = false;
        let divBall = document.getElementById('ball');
        divBall.innerHTML = "<svg id='svg'xmlns='http://www.w3.org/2000/svg'version='1.1'width='820'height='620'><defs><clipPath id='clip1'><path d='M0,0 h800 v600 h-800z'clip-rule='evenodd' /></clipPath></defs><rect id='r1' x='0' y='0' width='820' height='620' fill='#eeeeee' stroke='black'/><g clip-path='URL(#clip1)'></g></svg>";
        svg = document.getElementById('svg');
        masBalls = document.getElementsByTagName("circle");
        svg.addEventListener('mousemove', getMousePosition);
        svg.addEventListener('click', addBall);
        setInterval("move()", 16);
        flag = true;
        return flag;
    } catch (e) {
        throw new Error(`div element not found at DOM!!!`);
    }
}

function addBall() {
    let ball = new Ball(25, mouse.x, mouse.y, randomDirectionX(), randomDirectionY(), getRandomColor());
    let svgBall = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgBall.setAttributeNS(null, "cx", ball.cx);
    svgBall.setAttributeNS(null, "cy", ball.cy);
    svgBall.setAttributeNS(null, "r", ball.r);
    svgBall.setAttributeNS(null, "dx", ball.deltaX);
    svgBall.setAttributeNS(null, "dy", ball.deltaY);
    svgBall.setAttributeNS(null, "fill", ball.color);
    svg.appendChild(svgBall);
    masBalls = document.getElementsByTagName("circle");
    return masBalls;
}

function randomDirectionX() {
    let speed = 1;
    let direction = getRandomInt(1, 360) * Math.PI / 180;
    let dx = Math.cos(direction) * speed;
    return dx;
}

function randomDirectionY() {
    let speed = 1;
    let direction = getRandomInt(1, 360) * Math.PI / 180;
    let dy = Math.sin(direction) * speed;
    return dy;
}

function move() {
    let flag = false;
    for (let i = 0; i < masBalls.length; i++) {
        let x = +masBalls[i].cx.animVal.value;
        let y = +masBalls[i].cy.animVal.value;
        let dx = +masBalls[i].attributes.dx.nodeValue;
        let dy = +masBalls[i].attributes.dy.nodeValue;
        let R = +masBalls[i].r.animVal.value;
        if (x + dx >= svg.clientWidth - R || x + dx <= R) {
            dx = -dx;
            svg.getElementsByTagName("circle")[i].setAttribute("dx", dx);
        }
        if (y + dy >= svg.clientHeight - R || y + dy <= R) {
            dy = -dy;
            svg.getElementsByTagName("circle")[i].setAttribute("dy", dy);
        }
        x += dx;
        y += dy;
        svg.getElementsByTagName("circle")[i].setAttribute("cx", x);
        svg.getElementsByTagName("circle")[i].setAttribute("cy", y);
        flag = true;
    };
    return flag;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}