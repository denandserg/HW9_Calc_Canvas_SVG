let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.scale(0.5,0.5);

function drawCanvas (canvasObj, x,y) {
    let canvas = canvasObj;
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(x,y);
    context.stroke();
    return context;
}

function CanvasMock(width, height) {
    this.mock = [];
    this.width = width;
    this.height = height;
    this.context = new ContextMock(this.mock);

    this.getContext = (string) =>
    {
        this.mock.push('[getContext ' + string + ']');
        return this.context
    }
}

function ContextMock(mock) {
    this.mock = mock;
    this.beginPath = () => {
        this.mock.push('[beginPath]');
    };

    this.moveTo = (x, y) => {
        this.mock.push('[moveTo ' + x + ', ' + y + ']');
    };

    this.lineTo = (x, y) => {
        this.mock.push('[lineTo ' + x + ', ' + y + ']');
    };

    this.stroke = () => {
        this.mock.push('[stroke]');
    }
}

let visualTree = new VisualTree(context);

visualTree.insert(8);
visualTree.insert(4);
visualTree.insert(12);
visualTree.insert(2);
visualTree.insert(6);
visualTree.insert(10);
visualTree.insert(14);

let btnInsert = document.getElementById("btnInsert");
let btnFind = document.getElementById("btnFind");
let btnRemove = document.getElementById("btnRemove");
let inputValueInsert = document.getElementById("textValInsert");
let inputValueRemove = document.getElementById("textValRemove");
let inputValueFind = document.getElementById("textValFind");
let btnEmpty = document.getElementById("btnEmpty");
let btnArray = document.getElementById("btnArray");
let btnString = document.getElementById("btnString");
let outputValArray = document.getElementById("outputValArray");
let outputValString = document.getElementById("outputValString");

let myCanvas = document.getElementById("myCanvas");
let dragging = false;
let lastX;
let marginLeft = 0;

myCanvas.addEventListener('mousedown', function(e) {
    let evt = e || event;
    dragging = true;
    lastX = evt.clientX;
    e.preventDefault();
}, false);

window.addEventListener('mousemove', function(e) {
    let evt = e || event;
    if (dragging) {
        let delta = evt.clientX - lastX;
        lastX = evt.clientX;
        marginLeft += delta;
        myCanvas.style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
}, false);

window.addEventListener('mouseup', function() {
    dragging = false;
}, false);

btnString.addEventListener('click', () => {
    outputValArray.value = "";
    outputValString.value = visualTree.toString();
});

btnArray.addEventListener('click', () => {
    outputValArray.value = visualTree.toArray();
    outputValString.value = "";
});

btnEmpty.addEventListener('click', () => {
    visualTree.clear();
    outputValArray.value = "";
    outputValString.value = "";
    inputValueInsert.value = "";
    inputValueFind.value = "";
    inputValueRemove.value = "";
});

btnRemove.addEventListener('click', () => {
    visualTree.remove(+inputValueRemove.value);
    outputValArray.value = "";
    outputValString.value = "";
    inputValueInsert.value = "";
    inputValueFind.value = "";
    inputValueRemove.value = "";
});

btnFind.addEventListener('click', () => {
    visualTree.find(+inputValueFind.value);
    outputValArray.value = "";
    outputValString.value = "";
    inputValueInsert.value = "";
    inputValueFind.value = "";
    inputValueRemove.value = "";
});

btnInsert.addEventListener('click', () => {
    visualTree.insert(+inputValueInsert.value);
    outputValArray.value = "";
    outputValString.value = "";
    inputValueInsert.value = "";
    inputValueFind.value = "";
    inputValueRemove.value = "";
});