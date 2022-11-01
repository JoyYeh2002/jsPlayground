// Updated 11.01.2022

// Set the variables
let loop;
let fps = 60;
let cnv, ctx;

let ball = {
    xpos : 0,
    ypos : 0,
    xvel : 5,
    yvel : 5,
    size : 30,
    color : 'white',
    
    // Place the initial ball in the center
    init : function(cnv) {
        this.xpos = (cnv.width - this.size) / 2;
        this.ypos = (cnv.height - this.size) / 2;
    },

    // Update positions
    update : function(cnv) {
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollisions(cnv);
    },

    // Instantiate the circle
    draw : function(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI * 2, true);
        ctx.fill();
    },

    // Collision detection
    checkForCollisions : function(cnv) {
        if (this.xpos + this.size / 2 > cnv.width || this.xpos - this.size / 2 < 0) {
            this.xvel = -this.xvel;
        }
        if (this.ypos + this.size / 2 > cnv.height || this.ypos - this.size / 2 < 0) {
            this.yvel = -this.yvel;
        }
    }
}

// Set up the game loop
window.onload = function() {
    console.log('gameloop');
    prepareCanvas();
    ball.init(cnv);

    // Ananymous function
    // setInterval(function we want to use, inverval for invocation)
    // 1000 ms in 1 second
    loop = setInterval(() => {
        update();
        render();
    }, 1000/fps); // invoke 60 times per second
}

// Helper: fills the canvas with color
function fillCanvas() {
    ctx.fillStyle = '#1bafdb';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}

// Loads and draws the canvas
function prepareCanvas() {
    cnv = document.getElementById('cnv');
    ctx = cnv.getContext('2d');
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
}

// Updates the ctx properties for the ball
function update() {
    ball.update(cnv);
}

// Draw the different ctx balls
function render() {
    fillCanvas();
    ball.draw(ctx);
}

