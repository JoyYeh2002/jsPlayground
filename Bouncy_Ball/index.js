let gameloop = new GameLoop();
let ball = new Ball();

gameloop.init = function() {
    ball.init(gameloop.cnv);
}

gameloop.resize = function() {
    ball.resize(gameloop.cnv);
}

gameloop.update = function() {
    ball.update(gameloop.cnv);
}

gameloop.render = function() {
    gameloop.ctx.fillStyle = '#1bafdb';         
    gameloop.ctx.fillRect(0,0, gameloop.cnv.width, gameloop.cnv.height);
    ball.render(gameloop.ctx);
}

window.onload = function() {
}

window.onresize = function() {
    gameloop.onresize();
}

function startGame() {
    gameloop.start();
}
