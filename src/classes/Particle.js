class Particle {
    constructor(x, y) {

        this.old = {
            x: 0,
            y: 0
        };
        // this.x = this.old.x = random(0, innerWidth);
        // this.y = this.old.y = random(0, innerHeight);
        this.x = this.old.x = x;
        this.y = this.old.y = y;
        this.vel = {
            x: 0,
            y: 0
        }

        this.color = `hsl(197, 85%, 63%)`;

    }
    collision(brother) {

        if (getDistance(this.x, this.y, brother.x, brother.y) < 20) {

            brother.vel.x += (this.x - brother.x) / 10;
            brother.vel.y += (this.y - brother.y) / 10; 

        }

    }
    moving(_mouse) {

        // Go to old pos
        this.vel.x -= (this.x - this.old.x) / 200;
        this.vel.y -= (this.y - this.old.y) / 200;

        // Moving
        this.vel.x *= .95;
        this.vel.y *= .95;
        this.x += this.vel.x;
        this.y += this.vel.y;

        this.color = `hsl(197, 85%, ${ getDistance(this.x, this.y, this.old.x, this.old.y) + 40 }%)`;
        // Collision with mouse
        if (getDistance(_mouse.x, _mouse.y, this.x, this.y) < 100) {


            this.vel.x += (this.x - _mouse.x) / 60;
            this.vel.y += (this.y - _mouse.y) / 60;

        }

    }
    draw() {

        // Rendering
        ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, 20, 0, PI * 2);

        ctx.fill();
        ctx.beginPath();

    }
}