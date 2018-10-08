
function Pos(x, y) {
    this.x = x;
    this.y = y;
}
var id = 0;
document.onclick = function (e) {
    clearInterval(id);
    var ball = document.getElementById("ball");   
    var rect = ball.getBoundingClientRect();
    var begin = new Pos(rect.x, rect.y);
    var end = new Pos(e.clientX - 50, e.clientY - 50);
    var offset = new Pos(end.x - begin.x, end.y - begin.y);
    var step = new Pos(1, 1);
    if (Math.abs(offset.x) > Math.abs(offset.y)) {
        step.y = offset.y / offset.x;           
    } else {
        step.x = offset.x / offset.y;   
    }
    if (offset.x < 0) {
        step.x = -Math.abs(step.x);
    }
    if (offset.y < 0) {
        step.y = -Math.abs(step.y);
    }
    id = setInterval(move, 5);   
    function move() {
        if (Math.round(begin.x) == end.x || Math.round(begin.y) == end.y) {
            clearInterval(id);
        } else {                       
            begin.x += step.x;            
            begin.y += step.y;            
            ball.style.left = begin.x + 'px';
            ball.style.top = begin.y + 'px';
        }
    }
}


