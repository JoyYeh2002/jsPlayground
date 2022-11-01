class Game {
    constructor() {
        this.fx = new Fx();
        this.player = new Player();
    }

    init() {
        this.fx.init();
        this.player.init();
    }

    resize() {
        console.log('game resize');
    }

    update() {
        this.player.update();
    }

    render() {
        this.fx.fillCanvas(rgb(51, 51, 51));
        this.player.render();
    }
    
}