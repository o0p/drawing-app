const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mouseup', function (event) {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', function (event) {
    if (isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

canvas.addEventListener('mousedown', function (event) {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
};

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
};

colorEl.addEventListener('change', (e) => color = e.target.value);

increaseBtn.addEventListener('click', function() {
    size = size + 1;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', function() {
    size = size - 1;
    if (size  < 1) {
        size = 1;
    }
    updateSizeOnScreen();
});



function updateSizeOnScreen() {

    sizeEl.innerHTML = size;
}