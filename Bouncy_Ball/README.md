# Bouncy Ball JS Simple Game Loop
- Updated 11.01.2022
- [David Reid: Vanilla Game Loop Class](https://github.com/david-reid/cwd-startscreen-session)

# Iteration 1: Create Ball Bouncing Effect with JS

- Define the background, object collision, rendering, updating, and canvas ctx
- Not modularized. Creating OOP classes soon!

# Future Improments

- Allow the user to control a plank for the ball to rebound on
- Allow collisions with obstacles for more complicated logic
- Change the styles
- Add more objects that can collide with each other.

**Set variables**
```JS
let loop;
let fps = 60;
let cnv, ctx;
```

**Ball object implementation**
```JS
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
```

**Set up the game loop**
```JS
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
```

**Canvas settings**
```JS
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
```

**Updates the ctx properties for the ball**
```JS
// Pass in different cnv states at 60 FPS
function update() {
    ball.update(cnv);
}

// Draw the different ctx balls
function render() {
    fillCanvas();
    ball.draw(ctx);
}
```
