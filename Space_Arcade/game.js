class Game {
    constructor() {
        this.fx = new Fx();
    }

    init() {
        console.log('game init');
        this.fx.init();
    }

    resize() {
        console.log('game resize');
    }

    update() {
        console.log('game update');
    }

    render() {
        console.log('game render');
        this.fx.fillCanvas(rgb(51, 51, 51));
    }
}