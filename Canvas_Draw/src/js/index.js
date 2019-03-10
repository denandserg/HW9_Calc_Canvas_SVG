window.onload = () => {
	init();
}

let canvas,
	context,
	h,
	w;

let mouse = {
	x: 0,
	y: 0
};

let draw = false;

function init() {
	let divDraw = document.getElementById('divDraw');
	divDraw.innerHTML = '<canvas id="myCanvas" width="1000" height="500"></canvas>';
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	w = canvas.width;
	h = canvas.height;
	canvas.addEventListener("mousedown", drawTrue);
	canvas.addEventListener("mousemove", drawMove);
	canvas.addEventListener("mouseup", drawFalse);
}


function drawMove(e) {
	if (draw == true) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		context.lineTo(mouse.x, mouse.y);
		context.stroke();
	}
}

function drawFalse(e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
	context.closePath();
	draw = false;
}

function drawTrue(e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	draw = true;
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
}

