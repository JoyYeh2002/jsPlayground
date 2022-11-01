/* Updated: 11.01.2022
 * Created a gameloop class with:
 * constructors (position, velocity, appearange)
 * reset()
 * render()
 * update()
 * collision detection
 */

class GameLoop {
    constructor() {
        this.fps = 60;
        this.ctx = null;
        this.cnv = null;
        this.loop = null;
    }

    prepareCanvas() {
        this.cnv = document.getElementById('canvas');
        this.ctx = this.cnv.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;

        // New: re-size wrt. window size
        this.onresize();
    }

    onresize() {
        if (this.cnv) {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
            this.resize();
        }
    }

    start() {
        this.toggleScreen('start-screen', false);
        this.toggleScreen('canvas', true);
        this.prepareCanvas();
        this.init();
        this.loop = setInverval(() => {
            this.update();
            this.render();
        }, 1000/this.fps);
    }

    toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = ( toggle ) ? 'block' : 'none';
        element.style.display = display;
    }

    init() {
    }

    resize() {
    }

    update() {
    }

    render() {
    }
}
