
class KeyHandler {

    // Register all the keys
    constructor() {
        this.keys = [];
    }

    // Key press and release
    init() {
        window.addEventListener('keydown',(e) => { this.keyPressed(e) });
        window.addEventListener('keyup',(e) => { this.keyReleased(e) });
    }

    // Space key, etc.
    keyPressed(e) {
        if ( ( e.key === 'ArrowUp'
            || e.key === 'ArrowLeft'
            || e.key === 'ArrowRight'
            || e.key === ' ')
            && this.keys.indexOf(e.key) == -1 ) { // Prevent from pressing twice
            
            this.keys.push(e.key);
        }
    }

    // Release
    keyReleased(e) {
        if (   e.key === 'ArrowUp'
            || e.key === 'ArrowLeft'
            || e.key === 'ArrowRight'
            || e.key === ' ') {
            
            this.keys.splice(this.keys.indexOf(e.key), 1);
        }
    }

}
