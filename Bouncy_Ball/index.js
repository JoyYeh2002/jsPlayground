/* The main JS control code to call ball and GameLoop classes */
let gameloop = new GameLoop();
let ball = new Ball();

// Create some ananymous functions where we pass in actual cnvs to work with
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

    // Render the canvas
    gameloop.ctx.fillStyle = '#1bafdb';         
    gameloop.ctx.fillRect(0,0, gameloop.cnv.width, gameloop.cnv.height);

    // Render the Ball
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