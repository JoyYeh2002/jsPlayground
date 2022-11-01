class Ball {

    constructor() {
        this.xpos = 0;
        this.ypos = 0;
        this.xvel = 5;
        this.yvel = 5;
        this.size = 30;
        this.color = 'white';
    }

    init(cnv) {
        this.resize(cnv);
    };

    resize(cnv) {
        this.xpos = ( cnv.width - this.size ) / 2;
        this.ypos = ( cnv.height - this.size ) / 2;
        this.size = cnv.width * 0.025
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos, this.size, 0,Math.PI*2, true);
        ctx.fill();
    };

    update(cnv) {
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollisions(cnv);
    };

    checkForCollisions(cnv) {
        if ( this.xpos + this.size / 2 > cnv.width || this.xpos - this.size / 2 < 0 ) {
            this.xvel = -this.xvel;
        }
        if ( this.ypos + this.size / 2 > cnv.height || this.ypos - this.size / 2 < 0 ) {
            this.yvel = -this.yvel;
        }
    };
}
