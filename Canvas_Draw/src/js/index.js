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
	try {
		let flag = false;
		let divDraw = document.getElementById('divDraw');
		divDraw.innerHTML = '<canvas id="myCanvas" width="1000" height="500"></canvas>';
		canvas = document.getElementById("myCanvas");
		context = canvas.getContext("2d");
		w = canvas.width;
		h = canvas.height;
		canvas.addEventListener("mousedown", drawTrue);
		canvas.addEventListener("mousemove", drawMove);
		canvas.addEventListener("mouseup", drawFalse);
		flag = true;
		return flag;
	} catch (e) {
		throw new Error('div element not found at DOM!!!');
	}
}

function drawMove(e) {
	if (draw == true) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		context.lineTo(mouse.x, mouse.y);
		context.stroke();
		return true;
	}
	return false;
}

function drawFalse(e) {
	if (draw == true) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		context.lineTo(mouse.x, mouse.y);
		context.stroke();
		context.closePath();
		draw = false;
		return true;
	}
	return false;
}

function drawTrue(e) {
	if (draw == false) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		context.beginPath();
		context.moveTo(mouse.x, mouse.y);
		draw = true;
		return true;
	}
	return false;
}


