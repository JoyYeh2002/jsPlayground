class GameLoop {

    constructor(game) {
        this.fps = 60;
        this.game = game;
        this.loop = null;
    }

    start() {
        this.init();
        this.loop = setInterval(() => {
            this.update();
            this.render();
        }, 1000 / this.fps);
    }

    stop() {
        clearInterval(this.loop);
    }

    init() {
        if (this.game) {
            this.game.init();
        }
    }

    resize() {
        if (this.game) {
            this.game.resize();
        }
    }

    update() {
        if (this.game) {
          //  this.game.update();
        }
    }
    
    render() {
        if (this.game) {
         //   this.game.render();
        }
    }
}