const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mouseup', function (event) {
    isPressed = false;
    x = undefined;
    y = undefined;
    console.log(isPressed)
});

canvas.addEventListener('mousemove', function (event) {
    if (isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
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
    ctx.strkeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
};

