draw();

function draw() {
    var canvas = document.getElementById('local');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(20, 20, 500, 900);
        ctx.stroke();
        ctx.rect(20, 120, 200, 100);
        ctx.stroke();
        ctx.rect(20, 340, 250, 100);
        ctx.stroke();
        ctx.rect(20, 560, 200, 100);
        ctx.stroke();
        ctx.rect(320, 230, 200, 100);
        ctx.stroke();
        ctx.rect(320, 450, 200, 100);
        ctx.stroke();
        ctx.rect(320, 670, 200, 100);
        ctx.stroke();
    }
}